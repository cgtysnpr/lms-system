import CourseCurriculum from "../../components/curriculum/CourseCurriculum";
const curriculumDatas = [
  {
    title: "SQL Server Database Development in Amharic Introduction",
  },
  {
    title: "SQL Server Database Development in Amharic",
    button: true,
  },
  {
    title: "SQL Server Database Development in Amharic",
    button: true,
  },
  {
    title: "SQL Server Database Development in Amharic",
    button: true,
  },
  {
    title: "SQL Server Database Development in Amharic Introduction",
  },
  {
    title: "SQL Server Database Development in Amharic",
    button: true,
  },
  {
    title: "SQL Server Database Development in Amharic",
    button: true,
  },
  {
    title: "SQL Server Database Development in Amharic",
    button: true,
  },
];
const Curriculum = () => {
  return (
    <section className="curriculum_outer">
      <div className="container">
        <div className="title text-center">
          <h2>Course Curriculum</h2>
        </div>
        <div className="curriculum_list">
          <ul>
            {curriculumDatas.map((data, i) => (
              <CourseCurriculum key={`cur${i}`} data={data} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Curriculum;
