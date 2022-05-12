import Banner from "../sections/dashboard/Banner";
import Filter from "../sections/dashboard/Filter";
import List from "../sections/dashboard/List";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import courseService from "../services/course-service";
import sharedService from "../services/shared-service";
const Dashboard = () => {
  const { user } = useAuth();
  const [purcasedCoursesData, setPurcasedCoursesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedAuthor, setSelectedAuthor] = useState(0);
  useEffect(async () => {
    if (user) {
      const response = await courseService.purcasedCourse(user.userId);
      setPurcasedCoursesData(response.result);
      const categoriesResponse = await sharedService.allCategories();
      setCategories(categoriesResponse.result);
      const authorsResponse = await sharedService.allAuthors();
      setAuthors(authorsResponse.result);
      setFilteredData(response.result);
    }
  }, [user]);
  useEffect(() => {
    const filtered = purcasedCoursesData.filter((data) => {
      if (
        !search &&
        Number(selectedAuthor) === 0 &&
        Number(selectedCategory) === 0
      ) {
        return data;
      }
      if (
        (search &&
          Number(selectedAuthor) === 0 &&
          Number(selectedCategory) === 0 &&
          data.course.title.toLowerCase().includes(search.toLowerCase())) ||
        (!search &&
          selectedAuthor &&
          Number(selectedCategory) === 0 &&
          Number(data.course.author.userId) === Number(selectedAuthor)) ||
        (search &&
          data.course.title.toLowerCase().includes(search.toLowerCase()) &&
          selectedAuthor &&
          Number(selectedCategory) === 0 &&
          Number(data.course.author.userId) === Number(selectedAuthor)) ||
        (search &&
          data.course.title.toLowerCase().includes(search.toLowerCase()) &&
          selectedCategory &&
          Number(selectedAuthor) === 0 &&
          Number(data.course.category.id) === Number(selectedCategory)) ||
        (!search &&
          selectedCategory &&
          Number(selectedAuthor) === 0 &&
          Number(data.course.category.id) === Number(selectedCategory)) ||
        (!search &&
          selectedCategory &&
          selectedAuthor &&
          Number(data.course.category.id) === Number(selectedCategory) &&
          Number(data.course.author.userId) === Number(selectedAuthor)) ||
        (search &&
          data.course.title.toLowerCase().includes(search.toLowerCase()) &&
          selectedCategory &&
          selectedAuthor &&
          Number(data.course.category.id) === Number(selectedCategory) &&
          Number(data.course.author.userId) === Number(selectedAuthor))
      ) {
        return data;
      }
    });
    setFilteredData(filtered);
  }, [search, selectedCategory, selectedAuthor]);
  return (
    <div>
      <Banner />
      {/* ------ Header Section End Here ------ */}
      {/* ------ Content Section Start Here ------ */}
      <section className="das_content">
        <div className="container">
          <Filter
            setSelectedCategory={setSelectedCategory}
            setSelectedAuthor={setSelectedAuthor}
            categories={categories}
            setSearch={setSearch}
            authors={authors}
          />
          {filteredData.length !== 0 ? <List data={filteredData} /> : null}
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
