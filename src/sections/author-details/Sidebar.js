const Sidebar = () => {
  return (
    <div className="col-xl-4 px-md-5 ">
      <div className="row mt-5 pb-5 ">
        <div className="col-xl-10 ml-auto ">
          <div className="row ">
            <div className="col-12 ">
              <div className=" course_curriculum_img mb-3">
                <img src="./images/course_single_img.jpg" alt="" />
              </div>
              <h3 className="fw_500">Quasi Architecto</h3>
              <div className="percentage my-3" />
              <h5 className="sky_blue fw_500 border-bottom pb-4">
                0 % Complete
              </h5>
            </div>
          </div>
          <div className=" Profile_manage p-0">
            <ul className="mt-5">
              <li>
                <img
                  src="./images/course-curriculum-2.png"
                  width="10%"
                  alt=""
                />
                <a href className="font-weight-bold ">
                  Course Curriculum
                </a>
              </li>
              <li>
                <img src="./images/intructor.png" width="10%" alt="" />
                <a href className="font-weight-bold sky_blue">
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
