import { useLocation } from "react-router-dom";
const Sidebar = ({ data, isEnrolled, slug }) => {
  const location = useLocation();
  return (
    <div className="col-xl-4 px-md-5 ">
      <div className="row mt-5 pb-5 ">
        <div className="col-xl-10 ml-auto ">
          <div className="row ">
            <div className="col-12 ">
              <div className=" course_curriculum_img mb-3">
                <img
                  src={
                    data.coverImage
                      ? process.env.REACT_APP_API_ENDPOINT + data.coverImage
                      : "/images/course_single_img.jpg"
                  }
                  alt=""
                />
              </div>
              <h3 className="fw_500">{data.title}</h3>
              {isEnrolled ? (
                <>
                  <div className="percentage my-3">
                    <div
                      className="percant"
                      style={{ width: `${data.courseCompletePercentage}%` }}
                    />
                  </div>

                  <h5 className="sky_blue fw_500 border-bottom pb-4">
                    {parseInt(data.courseCompletePercentage)} % Complete
                  </h5>
                </>
              ) : null}
            </div>
          </div>
          <div className=" Profile_manage p-0">
            <ul className="mt-5">
              <li>
                <img
                  src={
                    location.pathname.includes("/course-curriculum")
                      ? "/images/course-curriculum.png"
                      : "/images/course-curriculum-2.png"
                  }
                  width="10%"
                  alt=""
                />
                <a
                  href={
                    location.pathname.includes("/course-curriculum")
                      ? null
                      : `/course-curriculum/${slug}`
                  }
                  className={
                    location.pathname.includes("/course-curriculum")
                      ? "font-weight-bold sky_blue"
                      : "font-weight-bold"
                  }
                >
                  Course Curriculum
                </a>
              </li>
              <li>
                <img
                  src={
                    location.pathname.includes("/author-details")
                      ? "/images/intructor.png"
                      : "/images/intructor-2.png"
                  }
                  width="10%"
                  alt=""
                />
                <a
                  href={
                    location.pathname.includes("/author-details")
                      ? null
                      : `/author-details/${slug}`
                  }
                  className={
                    location.pathname.includes("/author-details")
                      ? "font-weight-bold sky_blue"
                      : "font-weight-bold"
                  }
                >
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
