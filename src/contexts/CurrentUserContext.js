import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  handleLogin: ({ email, password }) => {},
  handleLogout: () => {},
  updateUser: ({ name }) => {},
});

export default CurrentUserContext;
