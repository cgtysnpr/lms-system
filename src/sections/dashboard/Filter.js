const Filter = ({
  categories,
  authors,
  setSelectedCategory,
  setSelectedAuthor,
  setSearch,
}) => {
  return (
    <div className="filter_top d-new-a">
      <div className="filter_left d-align">
        <div className="filter_box">
          <label>Category:</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value={0}>All</option>
            {categories?.map((data) => {
              if (!data.isActive) {
                return;
              }
              return (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              );
            })}
          </select>
          <span className="resizing_select" />
        </div>
        <div className="filter_box">
          <label>Author:</label>
          <select onChange={(e) => setSelectedAuthor(e.target.value)}>
            <option value={0}>All</option>
            {authors?.map((data) => (
              <option key={data.id} value={data.userId}>
                {data.firstname} {data.lastname}
              </option>
            ))}
          </select>
          <span className="resizing_select" />
        </div>
      </div>
      <div className="das_search d-new-a">
        <input
          type="text"
          className="form-control"
          name
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search course"
        />
        <button className="btn">
          <img src="images/icon-search.png" alt="" />
        </button>
      </div>
    </div>
  );
};
export default Filter;
