import Banner from "../sections/dashboard/Banner";
import Filter from "../sections/dashboard/Filter";
import List from "../sections/dashboard/List";
const Dashboard = () => {
  return (
    <div>
      <Banner />
      {/* ------ Header Section End Here ------ */}
      {/* ------ Content Section Start Here ------ */}
      <section className="das_content">
        <div className="container">
          <Filter />
          <List />
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
