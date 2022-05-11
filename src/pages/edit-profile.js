import Banner from "../sections/edit-profile/Banner";
import EditProfileDetaial from "../sections/edit-profile/EditProfileDetail";
import Sidebar from "../sections/edit-profile/Sidebar";
const EditProfile = () => {
  return (
    <div>
      <Banner />
      <div className="row m-0">
        <EditProfileDetaial />
        <Sidebar />
      </div>
    </div>
  );
};
export default EditProfile;
