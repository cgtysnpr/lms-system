import courseService from "../../services/course-service";
import Card from "../../components/index/Card";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const [allCourseData, setAllCourseData] = useState([]);
  useEffect(async () => {
    const response = await courseService.featured();
    setCourseData(response.result);
  }, []);
  const allCourses = async () => {
    const response = await courseService.allCourses();
    setAllCourseData(response.result);
  };
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
            {courseData?.map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </div>
          {allCourseData.length === 0 ? (
            <div className="view_more_btn text-center">
              <button onClick={() => allCourses()} className="btn btn-blue">
                View All Courses
              </button>
            </div>
          ) : null}
        </div>
        {allCourseData.length !== 0 ? (
          <>
            <div className="title title-center text-center">
              <h2>All Courses</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="courses_list">
              <div className="row mlr-25">
                {allCourseData?.map((data, i) => (
                  <Card key={`all${i}`} data={data} />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};
export default Courses;
