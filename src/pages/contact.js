import React from "react";
import Banner from "../sections/contact/Banner";
import Sidebar from "../sections/contact/Sidebar";
import Form from "../sections/contact/Form";
function Contact() {
  return (
    <div>
      <Banner />
      <div className="row mx-0 ">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}
export default Contact;
