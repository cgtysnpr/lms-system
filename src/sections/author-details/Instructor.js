const Instructor = ({ data }) => {
  return (
    <div className="col-xl-8 background_color_grey">
      <section className="instructor_outer">
        <div className="container">
          <div className="title">
            <h2>Your Instructor</h2>
          </div>
          <div className="instructor_block d-flex flex-wrap">
            <div className="instructor_img">
              <img
                src={
                  data.author.profilePicture
                    ? process.env.REACT_APP_API_ENDPOINT +
                      data.author.profilePicture
                    : "/images/ankit-mishra.png"
                }
                alt=""
              />
              <h4>
                {data.author.firstname} {data.author.lastname}
              </h4>
            </div>
            <div className="instructor_info">
              <p>{data.author.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Instructor;
