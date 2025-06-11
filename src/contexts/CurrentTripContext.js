import { createContext } from "react";

const CurrentTripContext = createContext({
  currentTrip: null,
  handleTripClick: ({ trip }) => {},
});

export default CurrentTripContext;
