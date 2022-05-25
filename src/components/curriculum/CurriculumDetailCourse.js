const CurriculumDetailCourse = ({
  data,
  isEnrolled,
  slug,
  lectureStarted,
  isFree,
}) => {
  return (
    <li>
      <p>{data.title}</p>
      {isEnrolled || isFree ? (
        <a
          href={
            data.lectureContent && isEnrolled
              ? process.env.REACT_APP_API_ENDPOINT + data.lectureContent
              : `/order-summary/${slug}`
          }
          target="_blank"
          onClick={() => lectureStarted(data.id)}
          className="btn btn-blue btn-blue-small"
        >
          Start
        </a>
      ) : null}
    </li>
  );
};
export default CurriculumDetailCourse;
