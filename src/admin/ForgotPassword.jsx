import React from "react";
import login from "../admin/Assets/login.jpg";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { forgotEmail } from "../controller/masterController";
import { forgotemail } from "../components/validations/validation";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const ForGotsEmail = (values, { resetForm }) => {
    forgotEmail(values)
      .then((data) => {
        localStorage.setItem("email", values.email); // Set email in local storage
        resetForm({});
        toast.success(data.message);
        navigate("/admin/verify");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={login} alt="Login" className="w-100" />
          </div>

          <div className="col-md-6">
            <main className="form-signin w-75 m-auto">
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={ForGotsEmail}
                validationSchema={forgotemail}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Forgot Password</h1>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Enter Email"
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : null}
                      <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <button
                      className="w-100 btn btn-lg btn-primary"
                      type="submit"
                    >
                      Continue
                    </button>
                  </form>
                )}
              </Formik>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
