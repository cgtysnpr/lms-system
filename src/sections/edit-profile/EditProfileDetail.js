const EditProfileDetail = () => {
  return (
    <div className="col-md-8 order-md-last pt-4 background_color_grey">
      <div className="row">
        <div className="col-xl-7">
          <div className>
            <div className="pl-3 pb-4">
              <h3 className="pb-3 font-weight-bold">Edit Profile</h3>
              <div className="courses_author_img ml-3 mb-2 w-25 h-25">
                <img src="images/edit.png" alt="" />
              </div>
              <h5>Change Photo</h5>
            </div>
            <div className="form-group pb-3">
              <label className="f_w_500">Full Name</label>
              <input
                type="text"
                className="form-control textfield"
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label className="f_w_500">Email Address</label>
              <input
                className="form-control textfield"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group py-3">
              <label className="f_w_500">Address</label>
              <input
                className="form-control textfield"
                placeholder="Enter address"
              />
            </div>
            <div className="row">
              <div className="col-xl-6 pb-3">
                <div className="form-group">
                  <label className="f_w_500">City</label>
                  <input
                    className="form-control textfield"
                    placeholder="Enter city"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="form-group">
                  <label className="f_w_500">Zip Code</label>
                  <input
                    className="form-control textfield"
                    placeholder="Enter zip code"
                  />
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-blue my-5">
              Update
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfileDetail;
