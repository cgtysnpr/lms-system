const Form = () => {
  return (
    <div className="col-md-8 pt-5 order-md-last background_color_grey">
      <div className="row">
        <div className="col-xl-7 ">
          <div className="pl-xl-3">
            <h3 className="pb-3 font-weight-bold">Contact</h3>
            <div className="form-group pb-3">
              <label className="f_w_500">Subject</label>
              <input
                type="text"
                className="form-control textfield"
                placeholder="Enter Subject"
              />
            </div>
            <div className="form-group">
              <label className="f_w_500">Message</label>
              <textarea
                className="form-control textfield"
                cols={10}
                rows={10}
                placeholder="Enter Message"
                defaultValue={""}
              />
            </div>
            <a href="#" className="btn btn-blue my-5">
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
