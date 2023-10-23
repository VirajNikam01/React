import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4414883&lng=73.8273467&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    setResList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };
  if (filteredList == null) return <Shimmer />;
  // console.log(filteredList);
  // console.log(filteredList[0].info.name);

  const searchLogic = () => {
    let searchOperation = resList.filter((filterResto) =>
      filterResto.info.name.toUpperCase().includes(searchInput.toUpperCase())
    );
    setFilteredList(searchOperation);
    setSearchInput('')
  };


  return (
    <div className="body">

      {/* search functionality */}
      <div className="search-box">
        <input
          type="text"
          placeholder="search here.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => {
          searchLogic()
        }}>Search</button>
      </div>

      {/* restranant card container */}
      <div className="card-container">
        {filteredList.length==0?<p className="serch-notfound"><b>result not found.</b> <p>search BLANK INPUT to view all RESTRONENTS</p></p> :
        filteredList.map((restaurants, i) => (
          <Link to={"/restronent/" + restaurants.info.id} key={i}>
            <RestroCards data={restaurants.info} />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Body;
