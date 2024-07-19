import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser/lib/index";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { blogAPi } from "../controller/masterController";
import { useNavigate } from "react-router-dom";
import { AddBlogValidations } from "../components/validations/validation";

export default function AddBlog({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState(""); // State to store editor content
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );
  const navigate = useNavigate();

  const AddBlock = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("blog_title", values.blog_title);
    formData.append("blog_image", values.blog_image);
    formData.append("description", content); // Add editor content to FormData

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
  };

  return (
    <div>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-white m-3 p-4 rounded">
                <p className="fs-3 fw-bold">Add Blog</p>
                <p className="text-muted">
                  Fill out the form to add a new blog post.
                </p>
                <main>
                  <Formik
                    initialValues={{
                      blog_title: "",
                      blog_image: null,
                      description: "", // Initialize description field
                    }}
                    onSubmit={AddBlock}
                    validationSchema={AddBlogValidations}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue,
                      values,
                      errors,
                      touched,
                    }) => (
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.blog_title}
                          />
                          {errors.blog_title && touched.blog_title ? (
                            <p className="text-danger">{errors.blog_title}</p>
                          ) : null}
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
                              setFieldValue(
                                "blog_image",
                                event.currentTarget.files[0]
                              );
                            }}
                            onBlur={handleBlur}
                          />
                          {errors.blog_image && touched.blog_image ? (
                            <p className="text-danger">{errors.blog_image}</p>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <JoditEditor
                            name="description"
                            ref={editor}
                            value={content} // Pass content state as value
                            config={config}
                            tabIndex={1}
                            onBlur={(newContent) => {
                              setContent(newContent); // Update content state
                            }}
                          />
                        </div>
                        {/* <div>{HTMLReactParser(content)}</div> */}
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    )}
                  </Formik>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
