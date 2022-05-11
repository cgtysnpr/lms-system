const Card = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-4 plr-25 d-flex">
      <a href="#" className="dasboard_item">
        <div className="dasboard_img">
          <img src={data.image} alt="" />
        </div>
        <div className="dasboard_info">
          <div className="dasboard_top">
            <h3>{data.title}</h3>
            <h6>{data.progress}</h6>
          </div>
          <div className="courses_author">
            <div className="courses_author_info">
              <div className="courses_author_img">
                <img src={data.authorImage} alt="" />
              </div>
              <span>{data.authorName}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
