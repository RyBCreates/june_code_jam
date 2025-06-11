import { createContext } from "react";

const CurrentTripContext = createContext({
  currentTrip: {},
  updateTrip: ({ name, startDate, endDate, location, imageUrl, travel }) => {},
  handleTripClick: ({ trip }) => {},
});

export default CurrentTripContext;
