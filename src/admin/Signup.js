import React, { useState } from "react";
import signup from "../admin/Assets/signup.svg";
import { SignupApi } from "../controller/masterController";
import { useFormik } from "formik";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    onSubmit: (values) => {
      SignupApi(values)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div>
              <img src={signup} alt="skajdkjlk" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <main className="form-signin w-75 m-auto">
              <form onSubmit={formik.handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>

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
                    type="tel"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="floatingInput">Phone</label>
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
                  Sign up
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
