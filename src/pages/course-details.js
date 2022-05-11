import Banner from "../sections/course-details/Banner";
import CourseDescription from "../sections/course-details/CourseDescription";
import YourInstructor from "../sections/course-details/YourInstructor";
import Curriculum from "../sections/course-details/Curriculum";
import Faq from "../sections/course-details/Faq";
import GetStarted from "../sections/course-details/GetStarted";
const CourseDetails = () => {
  return (
    <div>
      <Banner />
      <CourseDescription />
      <YourInstructor />
      <Curriculum />
      <Faq />
      <GetStarted />
    </div>
  );
};
export default CourseDetails;
