import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="col-md-4 order-md-first mt-4">
      <div className=" Profile_manage pt-4 pl-xl-5 pl-md-1">
        <ul className="pl-xl-5 pl-md-1">
          <li>
            <img src="./images/edit-profile.png" width="30px" alt="" />
            <a href className="font-weight-bold sky_blue">
              Edit Profile
            </a>
          </li>
          <li>
            <img src="./images/manage-subscription-2.png" width="30px" alt="" />
            <a href className="font-weight-bold">
              Manage Subscription
            </a>
          </li>
          <li>
            <img src="./images/contact-2.png" width="30px" alt="" />
            <Link to={"/contact"} className="font-weight-bold ">
              Contact
            </Link>
          </li>
          <li>
            <img src="./images/log-out.png" width="30px" alt="" />
            <a href className="font-weight-bold">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
