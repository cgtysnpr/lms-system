import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Page from "react-page-loading";
function UserLogin() {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    const response = await login(formData);
    if (response) {
      navigate("/");
      toast.success("Logged In!");
    }
  };
  if (typeof user === "undefined") {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} size={10}></Page>
      </div>
    );
  }
  if (user) {
    navigate("/");
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <section className="background_color_grey pt-4">
          <div className="container">
            <div className="row ">
              <div className="col-md-6 offset-md-3">
                <div className="text-center mb-4">
                  <h3 className="color_b_font_500 pb-2">
                    Log In to Eagle | Academy
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="form-group py-3">
                  <label className="f_w_500">Email Address</label>
                  <input
                    className="form-control textfield"
                    placeholder="Enter email address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label className="f_w_500">Password</label>
                  <input
                    type="password"
                    className="form-control textfield"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>
                <div>
                  <Link to="/forgat-password-first">
                    <p className=" text-right sky_blue f_w_500">
                      Forgot Password ?
                    </p>
                  </Link>
                </div>
                <div className="text-center">
                  <button type="submit" href="#" className="btn btn-blue my-4">
                    Log In
                  </button>
                  <p className="mb-5 pt-2">
                    Don't have an account?{" "}
                    <strong
                      onClick={() => navigate("/signup")}
                      className="sky_blue"
                    >
                      Sign Up
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
export default UserLogin;
