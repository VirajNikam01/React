import { CDN_URL } from "../../utils/contstants";

const RestronantCard = ({ data }) => {
  const {name, cuisines, costForTwo, avgRating, cloudinaryImageId  } = data;
  return (
    <div className="resto-card">
      <img alt="image" src={CDN_URL + cloudinaryImageId} />
      <div className="info">
        <div className="right-info">
          <p className="name">{name}</p>
          <div className="array">
            <p className="varity">{cuisines.join(", ")}</p>
          </div>
        </div>
        <div className="left-info">
          <p>{costForTwo}</p>
          <p>
            <b>{avgRating} </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestronantCard;
