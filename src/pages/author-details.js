import Banner from "../sections/author-details/Banner";
import Instructor from "../sections/author-details/Instructor";
import Sidebar from "../sections/author-details/Sidebar";
const AuthorDetails = () => {
  return (
    <div>
      <Banner />
      <div className="row  mx-0">
        <Sidebar />
        <Instructor />
      </div>
    </div>
  );
};
export default AuthorDetails;
