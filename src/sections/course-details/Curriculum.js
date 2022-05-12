import { useEffect, useState } from "react";
import CourseCurriculum from "../../components/curriculum/CourseCurriculum";
import curriculumService from "../../services/curriculum-service";

const Curriculum = ({ id, isEnrolled, slug }) => {
  const [sectionData, setSectionData] = useState([]);
  const [lectureData, setLectureData] = useState([]);
  useEffect(async () => {
    const response = await curriculumService.section(id);
    if (response.result) {
      setSectionData(response.result);
      const dataResponse = await curriculumService.lecture(
        response.result[0].id
      );
      if (dataResponse.result) {
        setLectureData(dataResponse.result);
      }
    }
  }, []);
  return (
    <>
      {sectionData.length !== 0 ? (
        <section className="curriculum_outer">
          <div className="container">
            <div className="title text-center">
              <h2>Course Curriculum</h2>
            </div>
            <div className="curriculum_list">
              <ul>
                {lectureData?.map((data, i) => (
                  <CourseCurriculum
                    isEnrolled={isEnrolled}
                    key={`cur${i}`}
                    data={data}
                    slug={slug}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
export default Curriculum;
