const CourseCurriculum = ({ data, isEnrolled, slug }) => {
  return (
    <li className={!data.button ? "curriculum_head" : null}>
      <p>{data.title} </p>
      {isEnrolled ? (
        <a
          href={
            data.lectureContent
              ? process.env.REACT_APP_API_ENDPOINT + data.lectureContent
              : `/order-summary/${slug}`
          }
          target="_blank"
          className="btn btn-blue btn-blue-small"
        >
          Start
        </a>
      ) : null}
    </li>
  );
};
export default CourseCurriculum;
