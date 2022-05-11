const ForgatPasswordFirst = () => {
  return (
    <section className="background_color_grey pt-4">
      <div className="container pb-5">
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <div className="text-center mb-4">
              <h3 className="color_b_font_500 pb-2">Forgot Password</h3>
              <p>
                Please enter your email address for receive <br /> verification
                code.
              </p>
            </div>
            <div className="form-group py-3">
              <label className="f_w_500">Email Address</label>
              <input
                className="form-control textfield"
                placeholder="Enter email address"
              />
            </div>
            <div className="text-center pb-5">
              <a href="#" className="btn btn-blue my-4">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForgatPasswordFirst;
