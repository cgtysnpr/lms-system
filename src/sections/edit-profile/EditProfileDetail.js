import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
const EditProfileDetail = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const editProfile = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    axios
      .put(
        `${process.env.REACT_APP_API_ENDPOINT}/api/User/student/${user.userId}/profile`,
        form,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
            ContentType: "multipart/form-data",
            accept: "*/*",
          },
        }
      )
      .then(function (response) {
        window.location.reload("/edit-profile");
        toast.success("Profile Updated Successfully!");
      })
      .catch(function (error) {});
  };
  const changedPhoto = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="col-md-8 order-md-last pt-4 background_color_grey">
      <form onSubmit={editProfile}>
        <div className="row">
          <div className="col-xl-7">
            <div className>
              <div className="pl-3 pb-4">
                <h3 className="pb-3 font-weight-bold">Edit Profile</h3>
                <div className="courses_author_img ml-3 mb-2 w-25 h-25">
                  {!preview ? (
                    <img
                      src={
                        user.profilePicture
                          ? process.env.REACT_APP_API_ENDPOINT +
                            user.profilePicture
                          : "/images/edit.png"
                      }
                      alt=""
                    />
                  ) : (
                    <img src={preview} alt="" />
                  )}
                </div>
                <div className="pl-4 pb-4">
                  <label for="avatar" className="custom-file-upload">
                    Change Photo
                    <input
                      type="file"
                      id="avatar"
                      name="ProfilePicture"
                      onChange={changedPhoto}
                      size="60"
                      accept="image/png, image/jpeg"
                    />
                  </label>
                </div>
              </div>
              <div className="form-group pb-3">
                <label className="f_w_500">First Name</label>
                <input
                  type="text"
                  name="Firstname"
                  defaultValue={user.firstname}
                  className="form-control textfield"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="form-group pb-3">
                <label className="f_w_500">Last Name</label>
                <input
                  type="text"
                  name="Lastname"
                  defaultValue={user.lastname}
                  className="form-control textfield"
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="f_w_500">Email Address</label>
                <input
                  name="Email"
                  defaultValue={user.email}
                  className="form-control textfield"
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group py-3">
                <label className="f_w_500">Address</label>
                <input
                  name="Address"
                  defaultValue={user.address}
                  className="form-control textfield"
                  placeholder="Enter address"
                />
              </div>
              <div className="row">
                <div className="col-xl-6 pb-3">
                  <div className="form-group">
                    <label className="f_w_500">City</label>
                    <input
                      defaultValue={user.city}
                      name="City"
                      className="form-control textfield"
                      placeholder="Enter city"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="f_w_500">Zip Code</label>
                    <input
                      defaultValue={user.zipCode}
                      name="ZipCode"
                      className="form-control textfield"
                      placeholder="Enter zip code"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-blue my-5">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditProfileDetail;
