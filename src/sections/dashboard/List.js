import Card from "../../components/dashboard/Card";
const cardDatas = [
  {
    image: "images/courses_img_01.jpg",
    title: "Quasi Architecto",
    progress: "0% Complete",
    authorImage: "images/preson.jpg",
    authorName: "Ankit Mishra",
  },
  {
    image: "images/courses_img_02.jpg",
    title: "Quasi Architecto",
    progress: "0% Complete",
    authorImage: "images/preson.jpg",
    authorName: "Ankit Mishra",
  },
  {
    image: "images/courses_img_03.jpg",
    title: "Quasi Architecto",
    progress: "0% Complete",
    authorImage: "images/preson.jpg",
    authorName: "Ankit Mishra",
  },
  {
    image: "images/courses_img_01.jpg",
    title: "Quasi Architecto",
    progress: "0% Complete",
    authorImage: "images/preson.jpg",
    authorName: "Ankit Mishra",
  },
  {
    image: "images/courses_img_02.jpg",
    title: "Quasi Architecto",
    progress: "0% Complete",
    authorImage: "images/preson.jpg",
    authorName: "Ankit Mishra",
  },
  {
    image: "images/courses_img_03.jpg",
    title: "Quasi Architecto",
    progress: "0% Complete",
    authorImage: "images/preson.jpg",
    authorName: "Ankit Mishra",
  },
];
const List = () => {
  return (
    <div className="dasboard_list">
      <div className="row mlr-25">
        {cardDatas.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </div>
  );
};
export default List;
