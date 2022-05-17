import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex plr-25">
      <Link to={`/course-details/${data.slug}`} className="courses_item">
        <div className="courses_img">
          <img
            src={process.env.REACT_APP_API_ENDPOINT + data.coverImage}
            alt=""
          />
        </div>
        <div className="courses_info">
          <div className="courses_info_top">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>

          <div className="courses_author">
            <Link to={`/author-details/${data.slug}`}>
              <div className="courses_author_info">
                <div className="courses_author_img">
                  <img
                    src={
                      data.author.profilePicture
                        ? process.env.REACT_APP_API_ENDPOINT +
                          data.author.profilePicture
                        : "images/preson.jpg"
                    }
                    alt=""
                  />
                </div>
                <span>
                  {data.author.firstname} {data.author.lastname}
                </span>
              </div>
            </Link>
            <div className="courses_price">
              <h5>{"$ " + data.coursePricePlan.price}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
