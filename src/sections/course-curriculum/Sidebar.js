const Sidebar = () => {
  return (
    <div className="col-xl-4 px-md-5 ">
      <div className="row mt-4 ">
        <div className="col-xl-10 ml-auto ">
          <div className=" course_curriculum_img mb-3">
            <img
              src="./images/course_single_img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <h3 className="f_w_b">Quasi Architecto</h3>
          <div className="percentage my-3" />
          <h3 className="sky_blue f_w_b border-bottom pb-4">0 % Complete</h3>
          <div className=" Profile_manage p-0">
            <ul className="mt-5">
              <li>
                <img src="./images/course-curriculum.png" width="10%" alt="" />
                <a href className="font-weight-bold sky_blue">
                  Course Curriculum
                </a>
              </li>
              <li>
                <img src="./images/intructor-2.png" width="10%" alt="" />
                <a href className="font-weight-bold">
                  Your Instructor
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
