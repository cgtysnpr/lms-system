import Banner from "../sections/course-curriculum/Banner";
import Sidebar from "../sections/sidebars/author-details-sidebar/Sidebar";
import CurriculumDetails from "../sections/course-curriculum/CurriculumDetails";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseService from "../services/course-service";
import curriculumService from "../services/curriculum-service";
const CourseCurriculum = () => {
  const [courseData, setCourseData] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [started, setStarted] = useState(0);
  const { user } = useAuth();
  let { id } = useParams();
  useEffect(async () => {
    const response = await courseService.courseDetails(id);
    if (response) {
      setCourseData(response.result);
      if (Number(response.result.coursePricePlan.price) === 0) {
        setIsFree(true);
      }
      if (typeof user !== "undefined" && user) {
        const responsePurcased = await courseService.purcasedCourse(
          user.userId
        );
        const check = responsePurcased.result.filter((data) => {
          if (data.courseId === response.result.id) {
            return data;
          }
        });
        if (check.length > 0) {
          setIsEnrolled(true);
        }
      }
    }
  }, [id, user, started]);
  const lectureStarted = async (id) => {
    const response = await curriculumService.lectureStart(id);
    setStarted(started + 1);
  };
  return (
    <div>
      <Banner />

      <div className="row  mx-0">
        {courseData.id ? (
          <>
            <Sidebar data={courseData} slug={id} isEnrolled={isEnrolled} />
            <CurriculumDetails
              slug={id}
              id={courseData.id}
              isEnrolled={isEnrolled}
              lectureStarted={lectureStarted}
              isFree={isFree}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default CourseCurriculum;
