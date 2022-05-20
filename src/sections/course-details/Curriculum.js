import { useEffect, useState } from "react";
import CourseCurriculum from "../../components/curriculum/CourseCurriculum";
import curriculumService from "../../services/curriculum-service";

const Curriculum = ({ id, isEnrolled, slug, lectureStarted }) => {
  const [sectionData, setSectionData] = useState([]);
  const [lectureData, setLectureData] = useState([]);
  const [length, setLength] = useState(0);
  useEffect(async () => {
    const response = await curriculumService.section(id);
    if (response.result) {
      setSectionData(response.result);
      setLength(response.result.length);
    }
  }, []);
  const lectureFunction = async (id) => {
    const dataResponse = await curriculumService.lecture(id);
    if (dataResponse.result) {
      setLectureData([...lectureData, dataResponse.result]);
    }
  };
  useEffect(async () => {
    if (length > 0) {
      await lectureFunction(sectionData[length - 1].id);
      setLength(length - 1);
    }
  }, [length]);
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
                {sectionData?.map((data, i) => (
                  <>
                    <h4
                      key={`sec${i}`}
                      className="mt-5 pb-3 text-center text-md-left"
                    >
                      {data.title}
                    </h4>
                    {lectureData[i]?.map((lecture, j) => (
                      <CourseCurriculum
                        key={`lecture${j}`}
                        lectureStarted={lectureStarted}
                        isEnrolled={isEnrolled}
                        data={lecture}
                        slug={slug}
                      />
                    ))}
                  </>
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
