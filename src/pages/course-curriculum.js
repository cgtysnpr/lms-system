import Banner from "../sections/course-curriculum/Banner";
import Sidebar from "../sections/author-details/Sidebar";
import CurriculumDetails from "../sections/course-curriculum/CurriculumDetails";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseService from "../services/course-service";
const CourseCurriculum = () => {
  const [courseData, setCourseData] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { user } = useAuth();
  let { id } = useParams();
  useEffect(async () => {
    if (courseData.length === 0) {
      const response = await courseService.courseDetails(id);
      if (response) {
        setCourseData(response.result);
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
    }
  }, [id, user]);
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
            />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default CourseCurriculum;
