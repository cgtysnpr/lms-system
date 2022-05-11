const Card = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex plr-25">
      <a href="#" className="courses_item">
        <div className="courses_img">
          <img src={data.image} alt="" />
        </div>
        <div className="courses_info">
          <div className="courses_info_top">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <div className="courses_author">
            <div className="courses_author_info">
              <div className="courses_author_img">
                <img src={data.userImage} alt="" />
              </div>
              <span>{data.userName}</span>
            </div>
            <div className="courses_price">
              <h5>{data.amount}</h5>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
