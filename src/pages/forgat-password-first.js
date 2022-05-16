import userService from "../services/user-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
const ForgatPasswordFirst = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const handleChange = (event) => {
    if (event.target.value) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };
  const forgatPassword = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    const response = await userService.forgatPassword(formData);
    if (response) {
      toast.success("Email Sent!");
      setStep(1);
      setEmail(formData.email);
    }
  };
  const getOtp = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    let code = "";
    for (let i in formData) {
      code += String(formData[i]);
    }
    setOtp(code);
    setStep(2);
  };
  const changePassword = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    formData["code"] = otp;
    const response = await userService.passwordChange(formData);
    if (response) {
      toast.success("Password changed successfully!");
      setStep(1);
      navigate("/login");
    }
  };
  return (
    <>
      {step === 0 ? (
        <section className="background_color_grey pt-4">
          <div className="container pb-5">
            <form onSubmit={forgatPassword}>
              <div className="row mt-4">
                <div className="col-md-6 offset-md-3">
                  <div className="text-center mb-4">
                    <h3 className="color_b_font_500 pb-2">Forgot Password</h3>
                    <p>
                      Please enter your email address for receive <br />{" "}
                      verification code.
                    </p>
                  </div>
                  <div className="form-group py-3">
                    <label className="f_w_500">Email Address</label>
                    <input
                      className="form-control textfield"
                      placeholder="Enter email address"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="text-center pb-5">
                    <button type="submit" className="btn btn-blue my-4">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : null}
      {step === 1 ? (
        <section className="background_color_grey pt-4">
          <div className="container">
            <div className="row mt-4 pb-5">
              <div className="col-xl-6 offset-xl-3 pb-4">
                <div className="text-center mb-4">
                  <h3 className="color_b_font_500 pb-2">Verify Your Email</h3>
                  <p>Please enter the OTP received on your email</p>
                  <p className="font-weight-bold">{email}</p>
                </div>
                <form onSubmit={getOtp}>
                  <div className="row py-3 pl-3">
                    <div className="col-2 p-md-3 p-0">
                      <div className="form-group ">
                        <input
                          className="form-control w-75  textfield text-center text-center"
                          onChange={handleChange}
                          maxLength={1}
                          name={1}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-2 p-md-3 p-0">
                      <div className="form-group ">
                        <input
                          onChange={handleChange}
                          className="form-control w-75  textfield text-center"
                          maxLength={1}
                          name={2}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-2 p-md-3 p-0">
                      <div className="form-group ">
                        <input
                          onChange={handleChange}
                          className="form-control w-75  textfield text-center"
                          maxLength={1}
                          name={3}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-2 p-md-3 p-0">
                      <div className="form-group ">
                        <input
                          onChange={handleChange}
                          className="form-control w-75  textfield text-center"
                          maxLength={1}
                          name={4}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-2 p-md-3 p-0">
                      <div className="form-group ">
                        <input
                          onChange={handleChange}
                          className="form-control w-75  textfield text-center"
                          maxLength={1}
                          name={5}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-2 p-md-3 p-0">
                      <div className="form-group ">
                        <input
                          onChange={handleChange}
                          className="form-control w-75  textfield text-center"
                          maxLength={1}
                          name={6}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center pb-5">
                    <button type="submit" className="btn btn-blue my-4">
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {step === 2 ? (
        <section className="background_color_grey pt-4">
          <div className="container">
            <form onSubmit={changePassword}>
              <div className="row mt-4">
                <div className="col-xl-6 offset-xl-3">
                  <div className="text-center mb-4">
                    <h3 className="color_b_font_500 pb-2">Create Password</h3>
                  </div>
                  <div className="form-group">
                    <label className="f_w_500">Create Password</label>
                    <input
                      className="form-control textfield"
                      placeholder="Enter password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="form-group py-3">
                    <label className="f_w_500">Confirm Password</label>
                    <input
                      className="form-control textfield"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      type="password"
                      required
                    />
                  </div>
                  <div className="text-center pb-5">
                    <button type="submit" className="btn btn-blue my-4">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
};
export default ForgatPasswordFirst;
