import { useEffect, useState } from "react";

const useRestroMenu = (id) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    let URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
   const request = await fetch(URL);
   const json = await request.json()
   setMenu(json?.data.cards[0].card.card.info)
  };

  return menu;
};

export default useRestroMenu;