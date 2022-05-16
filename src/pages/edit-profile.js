import Banner from "../sections/edit-profile/Banner";
import EditProfileDetail from "../sections/edit-profile/EditProfileDetail";
import Sidebar from "../sections/sidebars/profile/Sidebar";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
const EditProfile = () => {
  const { user } = useAuth();
  let { pathname } = useLocation();
  return (
    <div>
      <Banner />
      <div className="row m-0">
        {user ? (
          <>
            <EditProfileDetail user={user} />
            <Sidebar slug={pathname} />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default EditProfile;
