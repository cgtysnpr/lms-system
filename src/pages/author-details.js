import Banner from "../sections/author-details/Banner";
import Instructor from "../sections/author-details/Instructor";
import Sidebar from "../sections/sidebars/author-details-sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseService from "../services/course-service";
const AuthorDetails = () => {
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
        <Sidebar data={courseData} slug={id} isEnrolled={isEnrolled} />
        {courseData.length !== 0 ? <Instructor data={courseData} /> : null}
      </div>
    </div>
  );
};
export default AuthorDetails;
