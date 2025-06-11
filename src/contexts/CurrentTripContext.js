import { createContext } from "react";

const CurrentTripContext = createContext({
  currentTrip: null,
  updateTrip: ({ name, startDate, endDate, location, imageUrl, travel }) => {},
  handleTripClick: ({ trip }) => {},
});

export default CurrentTripContext;
