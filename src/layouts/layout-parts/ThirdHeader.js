import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
const ThirdHeader = ({ user }) => {
  const { logout } = useAuth();
  return (
    <>
      <div>
        <title>Eagle I Academy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* ------ Header Section Start Here ------ */}
        <header className="header_dasboard">
          <div className="container">
            <div className="header_block d-new-a">
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="userMenu">
                <div className="user_info">
                  <span>
                    {user.firstname} {user.lastname}
                  </span>
                  <div className="user_info_img">
                    <img
                      src={
                        user.profilePicture
                          ? process.env.REACT_APP_API_ENDPOINT +
                            user.profilePicture
                          : "/images/preson.jpg"
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="userDropDown">
                  <ul>
                    <li>
                      <Link to="/edit-profile">Edit profile</Link>
                    </li>
                    <li>
                      <a href="/dashboard">Manage Supscription</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a href="#" onClick={() => logout()}>
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default ThirdHeader;
