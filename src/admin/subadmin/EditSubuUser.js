import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { empUpdate } from "../../controller/masterController";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SubUserEditValidations } from "../../components/validations/validation";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

export default function EditSubuUser() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const location = useLocation();
  const singleuserlist = location?.state?.userList;
  console.log(singleuserlist, "KKKKKKKKKKK");
  const [subUserdetail, setsubUserdetail] = useState({
    id: singleuserlist?._id || "",
    name: singleuserlist?.name || "",
    email: singleuserlist?.email || "",
    phone: singleuserlist?.phone || "",
    role: singleuserlist?.role || "",
    password: "",
  });
  const handleSubmit = async (values) => {
    try {
      const data = await empUpdate(values);
      console.log(data, "data ata at");
      toast.success(data?.data?.message);
      navigate("/admin/subUserlist");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <main className="form-signin w-75 m-auto py-3">
              <Formik
                initialValues={subUserdetail}
                enableReinitialize
                onSubmit={handleSubmit}
                validationSchema={SubUserEditValidations}
              >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Employee Update</h1>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                      {errors.name && touched.name ? (
                        <p className="text-danger">{errors.name}</p>
                      ) : null}
                      <label htmlFor="name">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                        readOnly
                      />
                      {errors.email && touched.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : null}
                      <label htmlFor="email">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        name="role"
                        className="form-control"
                        id="role"
                        placeholder="Role"
                        onChange={handleChange}
                        value={values.role}
                      />
                      {errors.role && touched.role ? (
                        <p className="text-danger">{errors.role}</p>
                      ) : null}
                      <label htmlFor="role">Role</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={values.phone}
                        maxLength={10}
                      />
                      {errors.phone && touched.phone ? (
                        <p className="text-danger">{errors.phone}</p>
                      ) : null}
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-floating mb-3 position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <p className="text-danger">{errors.password}</p>
                      ) : null}
                      <label htmlFor="password">Password</label>
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
                    >
                      Update
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
