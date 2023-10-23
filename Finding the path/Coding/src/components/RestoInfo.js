import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer'

const RestoInfo = () => {
  const { id } = useParams();
  const[menu, setMenu] = useState(null)

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {

    let URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  const request =  await fetch(URL);

    const json = await request.json()
    console.log(json);
    setMenu(json?.data.cards[0].card.card.info)
  };

  if (menu == null) return <Shimmer/>

  return (
    <div className="resto-info">
      <h1>
        Id to fetch Data : <b>{id}</b>
      </h1>
      <h2>{menu.name}</h2>
    </div>
  );
};

export default RestoInfo;
