import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    const response = await register(formData);
    if (response) {
      navigate("/login");
      toast.success("Successfull!");
    }
  };
  return (
    <section className="background_color_grey pt-4">
      <form onSubmit={handleRegister}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="text-center mb-4">
                <h3 className="color_b_font_500 pb-2">
                  Sign Up to Eagle | Academy
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="form-group ">
                <label className="f_w_500">First Name</label>
                <input
                  type="text"
                  className="form-control textfield"
                  placeholder="Enter first name"
                  name="firstname"
                />
              </div>
              <div className="form-group ">
                <label className="f_w_500">Last Name</label>
                <input
                  type="text"
                  className="form-control textfield"
                  placeholder="Enter last name"
                  name="lastname"
                />
              </div>
              <div className="form-group py-3">
                <label className="f_w_500">Email Address</label>
                <input
                  className="form-control textfield"
                  placeholder="Enter email address"
                  name="email"
                />
              </div>
              <div className="row">
                <div className="col-xl-6 pb-3">
                  <div className="form-group">
                    <label className="f_w_500">Password</label>
                    <input
                      className="form-control textfield"
                      placeholder="Enter password"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="f_w_500">Confirm Password</label>
                    <input
                      className="form-control textfield"
                      placeholder="confirm password"
                      name="confirmPassword"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button href="#" type="submit" className="btn btn-blue my-4">
                  Sign Up
                </button>
                <p className="mb-5 pt-2">
                  Already have an account?{" "}
                  <strong
                    onClick={() => navigate("/login")}
                    className="sky_blue"
                  >
                    Login
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default SignUp;
