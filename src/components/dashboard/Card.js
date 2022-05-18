import { Link } from "react-router-dom";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="col-md-6 col-lg-4 plr-25 d-flex">
      <a href={`/course-details/${data.course.slug}`} className="dasboard_item">
        <div className="dasboard_img">
          <img
            src={
              data.course.coverImage
                ? process.env.REACT_APP_API_ENDPOINT + data.course.coverImage
                : "images/courses_img_01.jpg"
            }
            alt=""
          />
        </div>
        <div className="dasboard_info">
          <div className="dasboard_top">
            <h3>{data.course.title}</h3>
            <h6>
              {data.course.courseCompletePercentage}
              {"% Complete"}
            </h6>
          </div>
          <div className="courses_author">
            <Link to={`/author-details/${data.course.slug}`}>
              <div className="courses_author_info">
                <div className="courses_author_img">
                  <img
                    src={
                      data.course.author.profilePicture
                        ? process.env.REACT_APP_API_ENDPOINT +
                          data.course.author.profilePicture
                        : "images/preson.jpg"
                    }
                    alt=""
                  />
                </div>
                <span>
                  {data.course.author.firstname} {data.course.author.lastname}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
