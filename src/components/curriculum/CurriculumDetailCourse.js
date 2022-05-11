const CurriculumDetailCourse = ({ data }) => {
  return (
    <li>
      <p>{data.title}</p>
      <a href="#" className="btn btn-blue btn-blue-small">
        Start
      </a>
    </li>
  );
};
export default CurriculumDetailCourse;
