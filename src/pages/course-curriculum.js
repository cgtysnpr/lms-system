import Banner from "../sections/course-curriculum/Banner";
import Sidebar from "../sections/course-curriculum/Sidebar";
import CurriculumDetails from "../sections/course-curriculum/CurriculumDetails";
const CourseCurriculum = () => {
  return (
    <div>
      <Banner />

      <div className="row  mx-0">
        <Sidebar />
        <CurriculumDetails />
      </div>
    </div>
  );
};
export default CourseCurriculum;
