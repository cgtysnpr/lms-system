const CourseCurriculum = ({ data }) => {
  return (
    <li className={!data.button ? "curriculum_head" : null}>
      <p>{data.title} </p>
      {data.button ? (
        <a href="#" className="btn btn-blue btn-blue-small">
          Start
        </a>
      ) : null}
    </li>
  );
};
export default CourseCurriculum;
