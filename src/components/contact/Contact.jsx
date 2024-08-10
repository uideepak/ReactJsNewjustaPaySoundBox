import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { contactForm } from "../../controller/masterController";
import { ContactValidations } from "../validations/validation";
import contactimage from "../../Assets/business consulting.png";
export default function ContactForm() {
  const ContactForms = (values, { resetForm }) => {
    contactForm(values)
      .then((data) => {
        resetForm({});
        toast.success(data?.message);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact">
                <p className="fs-1 text-white fw-bold text-center">
                  If you have any quiries feel free to contact us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="row contacts align-items-center">
            <div className="col-md-5">
              <div className="text-white p-4">
                <img src={contactimage} alt="" className="w-100" />
              </div>
              {/* Repeat similar blocks as needed */}
            </div>
            <div className="col-md-7">
              <div className="bg-white m-3 p-4 rounded">
                <p className="fs-1 fw-bold">Contact us</p>
                <p className="text-muted">
                  We're here to help with any questions. Just fill out the form,
                  and we'll reach out.
                </p>

                <main>
                  <Formik
                    initialValues={{
                      first_Name: "",
                      email: "",
                      phone: "",
                      device: "",
                      message: "",
                    }}
                    onSubmit={ContactForms}
                    validationSchema={ContactValidations}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <form>
                        <div className="mb-3">
                          <label htmlFor="first_Name" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="first_Name"
                            name="first_Name"
                            onChange={handleChange("first_Name")}
                            onBlur={handleBlur("first_Name")}
                            label="Enter name"
                            value={values.first_Name}
                          />
                          {errors.first_Name && touched.first_Name ? (
                            <p className="text-danger">{errors.first_Name}</p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            label="Enter Email"
                            value={values.email}
                          />
                          {errors.email && touched.email ? (
                            <p className="text-danger">{errors.email}</p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            onChange={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                            label="Enter Mobile"
                            maxLength={10}
                            value={values.phone}
                          />
                          {errors.phone && touched.phone ? (
                            <p className="text-danger">{errors.phone}</p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="device" className="form-label">
                            Select Device
                          </label>
                          <select
                            className="form-select"
                            id="device"
                            name="device"
                            onChange={handleChange("device")}
                            onBlur={handleBlur("device")}
                            label="Enter Mobile"
                            value={values.device}
                          >
                            <option value="" label="Select Device" />
                            <option value="Table Pod">Table Pod</option>
                            <option value="Soundbox ID card">
                              Soundbox ID card
                            </option>
                            <option value="Table pod with Display">
                              Table pod with Display
                            </option>
                            <option value="Table Pod With Detachable QR Plate">
                              Table Pod With Detachable QR Plate
                            </option>
                          </select>
                          {errors.device && touched.device ? (
                            <p className="text-danger">{errors.device}</p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="3"
                            onChange={handleChange("message")}
                            onBlur={handleBlur("message")}
                            label="Enter Mobile"
                            value={values.message}
                          />
                          {errors.message && touched.message ? (
                            <p className="text-danger">{errors.message}</p>
                          ) : null}
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </Formik>
                </main>

                <div
                  id="successToast"
                  className="toast"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    <strong className="me-auto">Success</strong>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="toast-body">
                    Your message has been sent successfully!
                  </div>
                </div>

                <div
                  id="errorToast"
                  className="toast"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    <strong className="me-auto">Error</strong>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="toast-body">
                    There was an error sending your message. Please try again.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
