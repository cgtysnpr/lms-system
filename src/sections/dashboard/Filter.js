const Filter = () => {
  return (
    <div className="filter_top d-new-a">
      <div className="filter_left d-align">
        <div className="filter_box">
          <label>Category:</label>
          <select>
            <option>All</option>
            <option>Ankit Mishra</option>
          </select>
          <span className="resizing_select" />
        </div>
        <div className="filter_box">
          <label>Author:</label>
          <select>
            <option>All</option>
            <option>Ankit Mishra</option>
          </select>
          <span className="resizing_select" />
        </div>
      </div>
      <div className="das_search d-new-a">
        <input
          type="text"
          className="form-control"
          name
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
