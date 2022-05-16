import React from "react";
import Banner from "../sections/contact/Banner";
import Sidebar from "../sections/sidebars/profile/Sidebar";
import Form from "../sections/contact/Form";
import { useLocation } from "react-router-dom";
function Contact(props) {
  let { pathname } = useLocation();
  return (
    <div>
      <Banner />
      <div className="row mx-0 ">
        <Sidebar slug={pathname} />
        <Form />
      </div>
    </div>
  );
}
export default Contact;
