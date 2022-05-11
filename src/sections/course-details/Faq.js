import Questions from "../../components/course-details/Questions";
const faqData = [
  {
    question: "When does the course start and finish?",
    answer:
      "The course starts now and never ends! It is a completely self-paced online course - you decide when you start and when you finish.",
  },
  {
    question: "When does the course start and finish?",
    answer: "The course starts now and never ends!",
  },
  {
    question: "When does the course start and finish?",
    answer:
      "The course starts now and never ends! It is a completely self-pace start and when you finish.",
  },
];
const Faq = () => {
  return (
    <section className="faq_outer">
      <div className="container">
        <div className="title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq_list">
          <ul>
            {faqData.map((data, i) => (
              <Questions key={`questions${i}`} data={data} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Faq;
