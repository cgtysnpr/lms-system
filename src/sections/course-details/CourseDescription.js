import SocialButtons from "../../components/course-details/SocialButtons";

const socialButtonDatas = [
  {
    title: "facebook",
  },
  {
    title: "twitter",
  },
  {
    title: "whatsapp",
  },
  {
    title: "telegram",
  },
];
const CourseDescription = ({ data, isEnrolled }) => {
  return (
    <section className="course_single_outer">
      {data ? (
        <div className="container">
          <div className="course_single_block">
            <div className="course_single_img">
              <img
                src={
                  data.coverImage
                    ? process.env.REACT_APP_API_ENDPOINT + data.coverImage
                    : "/images/course_single_img.jpg"
                }
                alt=""
              />
            </div>
            <div className="course_single_info">
              <div className="title">
                <h2>{data.title}</h2>
              </div>
              <p>{data.description}</p>
              <h5 className="price">
                $ {data.coursePricePlan ? data.coursePricePlan.price : ""}
              </h5>
              <div className="enroll_btn">
                <a
                  href={isEnrolled ? "#" : `/order-summary/${data.slug}`}
                  className="btn btn-blue"
                >
                  {isEnrolled ? "Enrolled" : "Enroll Course"}
                </a>
              </div>
              <div className="share_outer">
                <div className="share_text d-align">
                  <img src="/images/icon-share.png" alt="" />
                  <span>Share</span>
                </div>
                <div className="share_list">
                  <ul className="d-align">
                    {socialButtonDatas.map((data, i) => (
                      <SocialButtons key={`social${i}`} data={data} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {data.summary ? (
            <div className="description">
              <div className="title">
                <h2>Course Description</h2>
              </div>
              <p>{data.summary}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};
export default CourseDescription;
