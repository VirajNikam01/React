import { useParams } from "react-router-dom";
import useMenuInfo from "../../utility/useMenuInfo";

const RestronentInfo = () => {
  const { resId } = useParams();

  const resInfo = useMenuInfo(resId);

  if (resInfo === null) return <h1>Loading...</h1>;
  console.log(resInfo);

  const {
    name,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    avgRating,
    areaName,
    slugs,
    sla,
    totalRatingsString,
    veg,
  } = resInfo.cards[0].card.card.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);

  return (
    <div>
      {itemCards.map((menu, i) => (
        <div key={i} className="relative border-b border-slate-900 my-10 lg:w-4/5 m-auto flex flex-col lg:flex-row justify-between px-10 py-5">
          <div className="lg:w-4/6">
            
              {veg ? (
                <div>
            <b className="border-2 border-green-500 text-base">🟢</b>
                </div>
              ) : (
                <div>
                  <b className="border-2 border-red-500 text-base">🔴</b>
                </div>
              )}
           
            <h1 className="my-2">
              <b>{menu.card.info.name}</b>
            </h1>
            <p className="text-base text-slate-400">{menu.card.info.description}</p>
          </div>
          <div>
            <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + menu.card.info.imageId}
            className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestronentInfo;
