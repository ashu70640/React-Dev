import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, avgRating, costForTwo, deliveryTime, cuisines } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg  bg-gray-200 hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>
    </div>
  );
};

//Higher Order Component
//input -restaurantCard==>RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    let { resData } = props;
    return (
      <div>
        <label className="absolute bg-green-100 text-black rounded">
          {String(resData?.info?.aggregatedDiscountInfoV3?.header) +
            " " +
            String(resData?.info?.aggregatedDiscountInfoV3?.subHeader)}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
