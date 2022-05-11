const StudentLoginDetail = () => {
  return (
    <>
      <div className="mb-5">
        <div className="mb-4">
          <h4 className="pb-2 color_b_font_500 ">Student Login Details</h4>
          <p>Create an account to access materials related to your purchase</p>
        </div>
        <div className="form-group ">
          <label className="f_w_500">Full Name</label>
          <input
            type="text"
            className="form-control textfield"
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group py-2">
          <label className="f_w_500">Email Address</label>
          <input
            className="form-control textfield"
            placeholder="Enter email address"
          />
        </div>
      </div>
    </>
  );
};
export default StudentLoginDetail;
