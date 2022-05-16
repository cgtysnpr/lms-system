import Banner from "../sections/edit-profile/Banner";
import EditProfileDetail from "../sections/edit-profile/EditProfileDetail";
import Sidebar from "../sections/edit-profile/Sidebar";
import useAuth from "../hooks/useAuth";
const EditProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <Banner />
      <div className="row m-0">
        {user ? (
          <>
            <EditProfileDetail user={user} />
            <Sidebar />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default EditProfile;
