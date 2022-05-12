import Card from "../../components/dashboard/Card";

const List = ({ data }) => {
  return (
    <div className="dasboard_list">
      <div className="row mlr-25">
        {data?.map((courseData, i) => (
          <Card key={i} data={courseData} />
        ))}
      </div>
    </div>
  );
};
export default List;
