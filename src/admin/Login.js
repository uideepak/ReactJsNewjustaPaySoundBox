import React from "react";
import login from "../admin/Assets/login.jpg";
import { LoginApi } from "../controller/masterController";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginValidations } from "../components/validations/validation";

export default function Login() {
  const navigate = useNavigate();

  const LoginUser = (values, { resetForm }) => {
    LoginApi(values)
      .then((data) => {
        localStorage.setItem("Token", JSON.stringify(data.token));
        localStorage.setItem("User", JSON.stringify(data.user));
        navigate("/admin/dashboard"); // Navigate to admin dashboard
        resetForm({});
        console.log(data, "&&&&&&&&&&&&");
        toast.success(data.message);
      })
      .catch((err) => {
        console.error("API call failed************************: ", err);
        toast.error(err.response.data.message); // Show error message
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
                  password: "",
                }}
                onSubmit={LoginUser}
                validationSchema={LoginValidations}
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
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Enter password"
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <p className="text-danger">{errors.password}</p>
                      ) : null}
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Sign in
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
