import signup from "../admin/Assets/signup.svg";
import { SignupApi } from "../controller/masterController";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SignUpValidations } from "../components/validations/validation";
import { Formik } from "formik";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const RegisterUser = (values, { resetForm }) => {
    SignupApi(values)
      .then((data) => {
        resetForm({});
        toast.success(data.message);
        {
          navigate("/admin/login");
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
          <div className="col-md-6">
            <div>
              <img src={signup} alt="skajdkjlk" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <main className="form-signin w-75 m-auto">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  mobile: "",
                  password: "",
                  role: "Admin",
                }}
                onSubmit={RegisterUser}
                validationSchema={SignUpValidations}
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
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

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
                      <input
                        type="tel"
                        className="form-control"
                        name="mobile"
                        maxLength={10}
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={handleChange("mobile")}
                        onBlur={handleBlur("mobile")}
                        label="Enter Mobile"
                        value={values.mobile}
                      />
                      {errors.mobile && touched.mobile ? (
                        <p className="text-danger">{errors.mobile}</p>
                      ) : null}
                      <label htmlFor="floatingInput">Phone</label>
                    </div>
                    <div className="form-floating mb-3 position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
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
                      <div className=" password-icon  ">
                        {showPassword ? (
                          <FaRegEye
                            size={20}
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <FaRegEyeSlash
                            size={20}
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
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
            <p className="text-center p-3">
              Already have an account ?<Link to="/admin/login"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
