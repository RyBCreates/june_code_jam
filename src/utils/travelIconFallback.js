import Car from "../assets/travel-icons/car.png";
import Plane from "../assets/travel-icons/airplane.png";
import Boat from "../assets/travel-icons/boat.png";

export const getFallbackImage = (travelType) => {
  if (travelType === "car") return Car;
  if (travelType === "plane") return Plane;
  if (travelType === "boat") return Boat;
  return null;
};
