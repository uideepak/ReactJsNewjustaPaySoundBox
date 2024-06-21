import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { blogAPi } from "../controller/masterController";
import { useNavigate } from "react-router-dom";
export default function AddBlog() {
  const userid = localStorage.getItem("User");
  console.log(userid, "AAAAAAAAAAAAAAAA");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      blog_title: "",
      blog_image: null,
      description: "",
      // added_by_user_id:"",
    },
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("blog_title", values.blog_title);
      formData.append("blog_image", values.blog_image);
      formData.append("description", values.description);
      // formData.append("added_by_user_id", values.userid);

      blogAPi(formData)
        .then((data) => {
          resetForm({});
          toast.success(data?.message);
          navigate("/admin/allblog");
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message);
        });
    },
  });

  return (
    <div>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-white m-3 p-4 rounded">
                <p className="fs-1 fw-bold">Add Blog</p>
                <p className="text-muted">
                  Fill out the form to add a new blog post.
                </p>

                <form
                  onSubmit={formik.handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="mb-3">
                    <label htmlFor="blogTitle" className="form-label">
                      Blog Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="blogTitle"
                      name="blog_title"
                      value={formik.values.blog_title}
                      onChange={formik.handleChange}
                    />
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
                      onChange={(event) => {
                        formik.setFieldValue(
                          "blog_image",
                          event.currentTarget.files[0]
                        );
                      }}
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
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formik.isSubmitting}
                  >
                    Submit
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
