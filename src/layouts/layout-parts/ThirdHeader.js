import useAuth from "../../hooks/useAuth";
const ThirdHeader = ({ user }) => {
  const { logout } = useAuth();
  console.log(user);
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
                <a href="#">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
              <div className="userMenu">
                <div className="user_info">
                  <span>
                    {user.firstname} {user.lastname}
                  </span>
                  <div className="user_info_img">
                    <img
                      src={user.profilePicture || "images/preson.jpg"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="userDropDown">
                  <ul>
                    <li>
                      <a href="#">Edit profile</a>
                    </li>
                    <li>
                      <a href="#">Manage Supscription</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
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
