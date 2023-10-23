const RestroCards = ({ data }) => {
  const { name, costForTwo, areaName, locality, cloudinaryImageId } = data;

  return (
    <div className="restro-cards">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="image"
      />
      <h1>{name}</h1>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
      <p>{locality}</p>
    </div>
  );
};

export default RestroCards;
