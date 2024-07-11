import React, { useState, useRef, useMemo, useEffect } from "react";
import { blogUpdates } from "../controller/masterController";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

export default function EditBlog({ placeholder }) {
  const editor = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const singleblogData = location?.state?.blogData;

  const [blogDetail, setBlogDetail] = useState({
    id: singleblogData?._id || "",
    blog_title: singleblogData?.blog_title || "",
    blog_image: singleblogData?.blog_image || "",
    description: singleblogData?.description || "",
  });

  const [content, setContent] = useState(blogDetail.description);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  useEffect(() => {
    setContent(blogDetail.description);
  }, [blogDetail.description]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("id", blogDetail.id);
    formData.append("blog_title", blogDetail.blog_title);
    formData.append("description", content);
    formData.append("blog_image", blogDetail.blog_image);

    try {
      const data = await blogUpdates(formData);
      toast.success(data?.data?.message);
      navigate("/admin/allblog");
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
                  <div className="mb-3 d-flex flex-column">
                    <label htmlFor="blogImage" className="form-label mt-3">
                      Previous Blog Image
                    </label>
                    <div>
                      <img
                        src={
                          `http://192.168.0.247:8000/${singleblogData?.blog_image}` ||
                          blogDetail.blog_image
                        }
                        alt=""
                        className="w-25 mt-3"
                      />
                    </div>
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
                    <JoditEditor
                      name="description"
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent(newContent)}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
