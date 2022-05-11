import Card from "../../components/index/Card";
const courseData = [
  {
    image: "images/courses_img_01.jpg",
    title: "Quasi Architecto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userImage: "images/preson.jpg",
    userName: "Ankit Mishra",
    amount: "$ 20.00",
  },
  {
    image: "images/courses_img_02.jpg",
    title: "Quasi Architecto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userImage: "images/preson.jpg",
    userName: "Ankit Mishra",
    amount: "$ 20.00",
  },
  {
    image: "images/courses_img_03.jpg",
    title: "Quasi Architecto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userImage: "images/preson.jpg",
    userName: "Ankit Mishra",
    amount: "$ 20.00",
  },
];
const Courses = () => {
  return (
    <section className="courses_outer">
      <div className="container">
        <div className="title title-center text-center">
          <h2>Featured Courses</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="courses_list">
          <div className="row mlr-25">
            {courseData.map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </div>
          <div className="view_more_btn text-center">
            <a href="#" className="btn btn-blue">
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Courses;
