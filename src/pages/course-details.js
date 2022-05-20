import Banner from "../sections/course-details/Banner";
import CourseDescription from "../sections/course-details/CourseDescription";
import YourInstructor from "../sections/course-details/YourInstructor";
import Curriculum from "../sections/course-details/Curriculum";
import Faq from "../sections/course-details/Faq";
import GetStarted from "../sections/course-details/GetStarted";
import { useParams } from "react-router-dom";
import courseService from "../services/course-service";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import curriculumService from "../services/curriculum-service";
const CourseDetails = () => {
  const [courseData, setCourseData] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [started, setStarted] = useState(0);
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
  const lectureStarted = async (id) => {
    const response = await curriculumService.lectureStart(id);
    setStarted(started + 1);
  };
  return (
    <div>
      {courseData.length !== 0 ? (
        <>
          <Banner image={courseData.coverImage} />
          <CourseDescription data={courseData} isEnrolled={isEnrolled} />
          <YourInstructor slug={id} data={courseData.author} />
          <Curriculum
            setStarted={setStarted}
            started={started}
            slug={id}
            id={courseData.id}
            isEnrolled={isEnrolled}
            lectureStarted={lectureStarted}
          />
          <Faq />
          <GetStarted data={courseData} isEnrolled={isEnrolled} />
        </>
      ) : (
        <>
          <Banner />
          <div className="empty-div" />
        </>
      )}
    </div>
  );
};
export default CourseDetails;
