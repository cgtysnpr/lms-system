const OrderSummaryDetail = ({ data }) => {
  return (
    <>
      <h2 className="color_b_font_500 ">Order Summary</h2>
      <div className="row course_curriculum_img d-flex  bg-white my-4 pt-3">
        <div className="col-md-5 mb-3 course_curriculum_img ">
          <img
            src={
              data.coverImage
                ? process.env.REACT_APP_API_ENDPOINT + data.coverImage
                : "/images/course_single_img.jpg"
            }
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-7 ">
          <h3 className="font-weight-bold">{data.title}</h3>
          <p className="py-2 description-lines-4">{data.description}</p>
        </div>
        <p className="font-weight-bold ml-auto mr-3 pb-3 mt-md-n5">
          Billed Today (USD){" "}
          <strong className="sky_blue h5 font-weight-bold">
            {" "}
            $ {data.coursePricePlan ? data.coursePricePlan.price : ""}
          </strong>
        </p>
      </div>
    </>
  );
};
export default OrderSummaryDetail;
