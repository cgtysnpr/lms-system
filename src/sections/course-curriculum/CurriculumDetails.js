import CurriculumDetailCourse from "../../components/curriculum/CurriculumDetailCourse";
import { useEffect, useState } from "react";
import curriculumService from "../../services/curriculum-service";
const CurriculumDetails = ({ id, isEnrolled, slug }) => {
  const [sectionData, setSectionData] = useState([]);
  const [lectureData, setLectureData] = useState([]);
  useEffect(async () => {
    const response = await curriculumService.section(id);
    if (response.result) {
      setSectionData(response.result);

      response.result.map((data) => {
        lectureFunction(data.id);
      });
    }
  }, []);
  const lectureFunction = async (id) => {
    const dataResponse = await curriculumService.lecture(id);
    if (dataResponse.result) {
      setLectureData([...lectureData, dataResponse.result]);
    }
  };
  return (
    <div className="col-xl-8  px-xl-2 px-md-5 pt-4 background_color_grey">
      <div className="row pt-xl-5 ">
        <div className="col-xl-11 px-xl-5">
          <div className="title text-center text-md-left">
            <h2>Course Curriculum</h2>
          </div>
          <div className="curriculum_list">
            <ul className="mb-5">
              {sectionData?.map((data, i) => (
                <>
                  <h4
                    key={`sec${i}`}
                    className="mt-5 pb-3 text-center text-md-left"
                  >
                    {data.title}
                  </h4>
                  {lectureData[i]?.map((lecture, j) => (
                    <CurriculumDetailCourse
                      key={`lecture${j}`}
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
      </div>
    </div>
  );
};
export default CurriculumDetails;
