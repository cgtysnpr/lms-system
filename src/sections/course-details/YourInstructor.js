const YourInstructor = ({ data, slug }) => {
  return (
    <section className="instructor_outer">
      <div className="container">
        <div className="title">
          <h2>Your Instructor</h2>
        </div>
        <div className="instructor_block d-flex flex-wrap">
          <a href={`/author-details/${slug}`}>
            <div className="instructor_img">
              <img
                src={
                  data.profilePicture
                    ? process.env.REACT_APP_API_ENDPOINT + data.profilePicture
                    : "/images/ankit-mishra.png"
                }
                alt=""
              />
              <h4>
                {data.firstname} {data.lastname}
              </h4>
            </div>
          </a>
          <div className="instructor_info">
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default YourInstructor;
