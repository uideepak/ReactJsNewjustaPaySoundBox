import React, { useState } from "react";
import login from "../admin/Assets/login.jpg";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { passwordVerify } from "../controller/masterController";

export default function Verify() {
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem("email");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [verifyCode, setVerifyCode] = useState();

  const OtpMatch = (values, { resetForm }) => {
    const otpValue = values.otp.join("");
    passwordVerify({
      email: storedEmail,
      otp: verifyCode,
    })
      .then((data) => {
        resetForm({});
        toast.success(data.message);
        console.log(data, "kkkk");
        navigate("/admin/newpassword");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const handleChange = (element, index, setFieldValue) => {
    if (isNaN(element.value)) return false;
    const updatedOtp = [...otp];
    updatedOtp[index] = element.value;
    setOtp(updatedOtp);
    setFieldValue("otp", updatedOtp);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    const singleInteger = parseInt(updatedOtp.join(""), 10);
    setVerifyCode(singleInteger);
  };

  console.log(verifyCode, "dsdsd");
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={login} alt="Login" className="w-100" />
          </div>
          <div className="col-md-6">
            <Formik
              initialValues={{
                otp: otp,
              }}
              onSubmit={OtpMatch}
            >
              {({
                handleBlur,
                errors,
                touched,
                handleSubmit,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <h1 className="h3 mb-3 fw-normal text-center">
                    OTP Verification
                  </h1>

                  <div className="d-flex">
                    {otp.map((data, index) => (
                      <input
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        className="form-control text-center p-2 m-3"
                        onChange={(e) =>
                          handleChange(e.target, index, setFieldValue)
                        }
                        onFocus={(e) => e.target.select()}
                        onBlur={handleBlur}
                      />
                    ))}
                  </div>

                  {errors.otp && touched.otp ? (
                    <p className="text-danger mt-2">{errors.otp}</p>
                  ) : null}

                  <button
                    className="w-100 btn btn-lg btn-primary mt-3"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
