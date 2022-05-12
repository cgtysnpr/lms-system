const GetStarted = ({ data, isEnrolled }) => {
  return (
    <section className="get_start_outer">
      <div className="container">
        <div className="title text-center">
          <h2>Get started now!</h2>
        </div>
        <h5 className="price">$ {data.coursePricePlan.price}</h5>
        <a
          href={isEnrolled ? "#" : `/order-summary/${data.slug}`}
          className="btn btn-blue"
        >
          {isEnrolled ? "Enrolled" : "Enroll Course"}
        </a>
      </div>
    </section>
  );
};
export default GetStarted;
