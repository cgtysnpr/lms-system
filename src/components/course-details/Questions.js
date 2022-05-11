const Questions = ({ data }) => {
  return (
    <li>
      <h3>{data.question}</h3>
      <p>{data.answer}</p>
    </li>
  );
};
export default Questions;
