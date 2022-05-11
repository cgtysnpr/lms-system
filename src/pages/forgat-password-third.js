const ForgatPasswordThird = () => {
  return (
    <section className="background_color_grey pt-4">
      <div className="container">
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
              />
            </div>
            <div className="form-group py-3">
              <label className="f_w_500">Confirm Password</label>
              <input
                className="form-control textfield"
                placeholder="Confirm password"
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
export default ForgatPasswordThird;
