import React from "react";
// import signup from "../../admin/Assets/signup.svg";
import { Formik } from "formik";
import { SubUserSignup } from "../../controller/masterController";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SubUserValidations } from "../../components/validations/validation";
export default function SubUserSingup() {
  const navigate = useNavigate();

  const SubUserCreate = (values, { resetForm }) => {
    SubUserSignup(values)
      .then((data) => {
        resetForm({});
        toast.success(data.message);
        {
          navigate("/admin/subUserlist");
        }
        console.log(data, "kkkk");
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
          {/* <div className="col-md-6">
            <div>
              <img src={signup} alt="skajdkjlk" className="w-100" />
            </div>
          </div> */}
          <div className="col-md-12">
            <main className="form-signin w-75 m-auto py-3">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  role: "",
                  phone: "",
                  password: "",
                }}
                onSubmit={SubUserCreate}
                validationSchema={SubUserValidations}
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
                    <h1 className="h3 mb-3 fw-normal"> Employe Signup</h1>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="name"
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                        label="Enter name"
                        value={values.name}
                      />
                      {errors.name && touched.name ? (
                        <p className="text-danger">{errors.name}</p>
                      ) : null}
                      <label htmlFor="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        label="Enter Email"
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : null}
                      <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="role"
                        value={values.role}
                        id="role"
                        onChange={handleChange("role")}
                        onBlur={handleBlur("role")}
                      >
                        {/* <option selected>Open this select menu</option> */}
                        <option selected className="d-none" value="Admin">
                          Admin
                        </option>
                        <option value="Employee">Employee</option>
                      </select>
                      {errors.role && touched.role ? (
                        <p className="text-danger">{errors.role}</p>
                      ) : null}
                      <label htmlFor="floatingInput">Role</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        label="Enter phone"
                        maxLength={10}
                        value={values.phone}
                      />
                      {errors.phone && touched.phone ? (
                        <p className="text-danger">{errors.phone}</p>
                      ) : null}
                      <label htmlFor="floatingInput">Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
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
                      // onClick={navigate("/admin/login")}
                    >
                      Sign up
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
