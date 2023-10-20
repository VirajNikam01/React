import RestronantCard from "./RestronantCard";
import ShimmerUI from "./ShimmerUI"
import { useEffect, useState } from "react";

const CardContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.7372002&lng=73.6389598&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await request.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList.length == 0) {
    return <ShimmerUI/>
  }


  return (
    <div className="wrap">
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

          setRestaurantList(filteredData);
        }}
      >
        Top Restronents
      </button>
      <h3>
        " We have <span>{restaurantList.length}</span> Restrounts "
      </h3>
      <div className="card-container">
        {restaurantList.map((resto, i) => (
          <RestronantCard key={i} data={resto.info} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
