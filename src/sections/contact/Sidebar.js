const Sidebar = () => {
  return (
    <div className="col-md-4 mt-4  order-md-first">
      <div className=" Profile_manage pt-4 pl-xl-5 pl-md-1">
        <ul className="pl-xl-5 pl-md-1">
          <li>
            <img src="./images/edit-profile-2.png" width="30px" alt="" />
            <a href className="font-weight-bold">
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
            <img src="./images/contact.png" width="30px" alt="" />
            <a href className="font-weight-bold sky_blue">
              Contact
            </a>
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
