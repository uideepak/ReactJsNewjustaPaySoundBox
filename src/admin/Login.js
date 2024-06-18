import React from "react";
import login from "../admin/Assets/login.jpg";
import { LoginApi } from "../controller/masterController";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      LoginApi(values)
        .then((data) => {
          localStorage.setItem("Token", data.token);
          navigate("/admin/dashboard"); // Navigate to admin dashboard

          resetForm({});
          toast.success(data.message);

        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message || "An error occurred"); // Show error message
        });
    },
  });

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={login} alt="Login" className="w-100" />
          </div>
          <div className="col-md-6">
            <main className="form-signin w-75 m-auto">
              <form onSubmit={formik.handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
