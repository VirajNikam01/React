import RestronantCard from "./RestronantCard";
import Error from "./Error";
import ShimmerUI from "./ShimmerUI";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [search, setSearch] = useState("")
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.7372002&lng=73.6389598&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await request.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log(restaurantList);
  };

  if (restaurantList.length == 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="wrap">
      <div className="search-container">
        <button
        onClick={()=>{
          setFilterData(restaurantList)
        }}
        >Show All</button>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = restaurantList
              .map((elem, i) => {
                return elem;
              })
              .filter((filterElem) => {
                return filterElem.info.avgRating > 4;
              });

            setFilterData(filteredData);
          }}
        >
          Top Restronents
        </button>
        <h3>
          " We have <span>{restaurantList.length}</span> Restrounts "
        </h3>

          <div className="wrap-search">
          <input type="text" placeholder="Search Restraunt" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
          <button
          onClick={()=>{
           setFilterData(restaurantList.filter((elem)=>{

            return elem.info.name.toLowerCase().includes(search.toLowerCase())
          })) 
          }}
          >Search</button>
          </div>
      </div>
      <div className="card-container">
        {filterData.length ==0? <Error/> :
       filterData.map((resto, i) => (
          <RestronantCard key={i} data={resto.info} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
