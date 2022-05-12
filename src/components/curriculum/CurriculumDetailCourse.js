const CurriculumDetailCourse = ({ data, isEnrolled, slug }) => {
  return (
    <li>
      <p>{data.title}</p>

      <a
        href={
          data.lectureContent && isEnrolled
            ? process.env.REACT_APP_API_ENDPOINT + data.lectureContent
            : `/order-summary/${slug}`
        }
        target="_blank"
        className="btn btn-blue btn-blue-small"
      >
        Start
      </a>
    </li>
  );
};
export default CurriculumDetailCourse;
