import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Sidebar = ({ slug }) => {
  const { logout } = useAuth();
  return (
    <div className="col-md-4 order-md-first mt-4">
      <div className=" Profile_manage pt-4 pl-xl-5 pl-md-1">
        <ul className="pl-xl-5 pl-md-1">
          <li>
            <Link to={"/edit-profile"} className="font-weight-bold ">
              <img
                src={
                  slug === "/edit-profile"
                    ? "/images/edit-profile.png"
                    : "/images/edit-profile-2.png"
                }
                width="30px"
                alt=""
              />
              <a
                href
                className={
                  slug === "/edit-profile"
                    ? "font-weight-bold sky_blue"
                    : "font-weight-bold"
                }
              >
                Edit Profile
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"} className="font-weight-bold ">
              <img
                src="/images/manage-subscription-2.png"
                width="30px"
                alt=""
              />
              <a href className="font-weight-bold">
                Manage Subscription
              </a>
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={
                slug === "/contact"
                  ? "font-weight-bold sky_blue"
                  : "font-weight-bold"
              }
            >
              <img
                src={
                  slug === "/contact"
                    ? "/images/contact.png"
                    : "/images/contact-2.png"
                }
                width="30px"
                alt=""
              />
              Contact
            </Link>
          </li>
          <li>
            <a href="#" onClick={() => logout()} className="font-weight-bold ">
              <img src="/images/log-out.png" width="30px" alt="" />
              <a href className="font-weight-bold">
                Log Out
              </a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
