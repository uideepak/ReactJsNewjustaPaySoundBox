import React, { useState } from "react";
import { blogUpdates } from "../controller/masterController";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
export default function EditBlog() {
  const location = useLocation();
  const singleblogData = location?.state?.blogData;
  console.log(singleblogData, "All Blog Data");

  const [blogDetail, setBlogDetail] = useState({
    id: singleblogData?._id || "",
    blog_title: singleblogData?.blog_title || "",
    blog_image: singleblogData?.blog_image || "",
    description: singleblogData?.description || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = await blogUpdates(blogDetail);
      console.log(data, "sadjaskdjask");
      toast.success(data?.data?.message);

      setFeedbackMessage("Blog updated successfully!");
    } catch (error) {
      toast.error(error?.response?.data?.message);

      setFeedbackMessage("An error occurred while updating the blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-white m-3 p-4 rounded">
                <p className="fs-1 fw-bold">Edit Blog</p>
                <p className="text-muted">
                  Fill out the form to edit the blog post.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="blogTitle" className="form-label">
                      Blog Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="blogTitle"
                      name="blog_title"
                      onChange={(e) =>
                        setBlogDetail({
                          ...blogDetail,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={blogDetail.blog_title}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="blogImage" className="form-label">
                      old blog image
                      <img
                        src={`http://192.168.0.247:8000/${singleblogData?.blog_image}` || blogDetail?.blog_image}
                        alt=""
                        className="w-25"
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="blogImage" className="form-label">
                      Blog Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="blogImage"
                      name="blog_image"
                      onChange={(e) =>
                        setBlogDetail({
                          ...blogDetail,
                          blog_image: e.target.files[0],
                        })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      onChange={(e) =>
                        setBlogDetail({
                          ...blogDetail,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={blogDetail.description}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
                {feedbackMessage && <p className="mt-3">{feedbackMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
