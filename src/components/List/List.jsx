import "./list.css";
import { useLocation } from "react-router-dom";
const List = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="list">
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
