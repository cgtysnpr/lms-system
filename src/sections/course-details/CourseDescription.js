import SocialButtons from "../../components/course-details/SocialButtons";
const socialButtonDatas = [
  {
    image: "images/icon-facebook.png",
  },
  {
    image: "images/icon-twitter.png",
  },
  {
    image: "images/icon-whatsapp.png",
  },
  {
    image: "images/icon-messanger.png",
  },
];
const CourseDescription = () => {
  return (
    <section className="course_single_outer">
      <div className="container">
        <div className="course_single_block">
          <div className="course_single_img">
            <img src="images/course_single_img.jpg" alt="" />
          </div>
          <div className="course_single_info">
            <div className="title">
              <h2>Quasi Architecto</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <h5 className="price">$ 20.00</h5>
            <div className="enroll_btn">
              <a href="#" className="btn btn-blue">
                Enroll Course
              </a>
            </div>
            <div className="share_outer">
              <div className="share_text d-align">
                <img src="images/icon-share.png" alt="" />
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
        <div className="description">
          <div className="title">
            <h2>Course Description</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.
          </p>
        </div>
      </div>
    </section>
  );
};
export default CourseDescription;
