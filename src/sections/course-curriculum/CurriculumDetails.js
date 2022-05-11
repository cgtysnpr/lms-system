import CurriculumDetailCourse from "../../components/curriculum/CurriculumDetailCourse";
const detailData = [
  {
    title: "SQL Server Database Development in Amharic",
  },
  {
    title: "SQL Server Database Development in Amharic",
  },
  {
    title: "SQL Server Database Development in Amharic",
  },
  {
    title: "SQL Server Database Development in Amharic",
  },
  {
    title: "SQL Server Database Development in Amharic",
  },
];
const CurriculumDetails = () => {
  return (
    <div className="col-xl-8  px-xl-2 px-md-5 pt-4 background_color_grey">
      <div className="row pt-xl-5 ">
        <div className="col-xl-11 px-xl-5">
          <div className="title text-center text-md-left">
            <h2>Course Curriculum</h2>
          </div>
          <div className="curriculum_list">
            <ul className="mb-5">
              <h4 className="mt-5 pb-3 text-center text-md-left">
                Welcome to the corse!
              </h4>
              {detailData.map((data, i) => (
                <CurriculumDetailCourse key={`corse${i}`} data={data} />
              ))}
              <h4 className="mt-5 pb-3  text-center text-md-left">
                About online courses
              </h4>
              {detailData.map((data, i) => (
                <CurriculumDetailCourse key={`online${i}`} data={data} />
              ))}
              <h4 className="mt-5 pb-3 text-center text-md-left">
                Find your best course idea
              </h4>
              {detailData.map((data, i) => (
                <CurriculumDetailCourse key={`best${i}`} data={data} />
              ))}
              <h4 className="mt-5 pb-3 text-center text-md-left">
                Validate your course topic
              </h4>
              {detailData.map((data, i) => (
                <CurriculumDetailCourse key={`topic${i}`} data={data} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurriculumDetails;
