import React from "react";
import login from "../admin/Assets/login.jpg";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { newpassword } from "../controller/masterController";
import { useNavigate } from "react-router-dom";
import { NewPasswordValidation } from "../components/validations/validation";

export default function NewPassword() {
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem("email");

  const updatePassword = (values, { resetForm }) => {
    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    newpassword({
      email: storedEmail,
      password: values.password,
      Confirmpassword: values.confirmPassword,
    })
      .then((data) => {
        toast.success(data.message);
        resetForm({});
        console.log(data, "Password updated successfully");
        navigate("/admin/login"); // Uncomment if you want to redirect
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={login} alt="Login" className="w-100" />
        </div>

        <div className="col-md-6">
          <main className="form-signin w-75 m-auto">
            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              onSubmit={updatePassword}
              validationSchema={NewPasswordValidation}
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
                  <h1 className="h3 mb-3 fw-normal">New Password</h1>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <p className="text-danger">{errors.confirmPassword}</p>
                    )}
                    <label htmlFor="confirmPassword">Confirm Password</label>
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
  );
}
