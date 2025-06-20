import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getTrips,
  addTrip,
  deleteTrip,
  updateProfile,
  addEvent,
} from "../../utils/api";
import { register, login, checkToken } from "../../utils/auth";
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Trips from "../Trips/Trips";
import TripCalendar from "../TripCalendar/TripCalendar";
import About from "../About/About";
import Footer from "../Footer/Footer";
import TripEditor from "../TripEditor/TripEditor";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import LoginModal from "../Modals/LoginModal/LoginModal";
import NewTripModal from "../Modals/NewTripModal/NewTripModal";
import ConfirmationModal from "../Modals/ConfirmationModal/ConfirmationModal";
import EditProfileModal from "../Modals/EditProfileModal/EditProfileModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import CurrentTripContext from "../../contexts/CurrentTripContext";

function App() {
  //Use for navigation to Trip Editor
  const navigate = useNavigate();

  //Registration && Login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const switchToRegister = () => {
    closeModal();
    setActiveModal("register");
  };

  const switchToLogin = () => {
    closeModal();
    setActiveModal("login");
  };

  const handleRegister = ({ email, password, name }) => {
    register({ email, password, name })
      .then((data) => {
        return login({ email, password });
      })
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeModal();
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  const handleLogin = ({ email, password }) => {
    return login({ email, password })
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeModal();
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  //Log Out Current User
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  // Update User
  const handleUpdateProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const updateUser = ({ name }) => {
    return updateProfile({ name })
      .then(() => {
        setCurrentUser({ ...currentUser, name });
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  //Authorization
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          setIsLoggedIn(true);
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  //Load Trips
  useEffect(() => {
    getTrips()
      .then((data) => {
        setTrips(data);
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
      });
  }, []);

  //Opening and Closing of Modals
  const [activeModal, setActiveModal] = useState("");

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") closeModal();
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //Create a New trip
  const handleNewTripClick = () => {
    setActiveModal("new-trip");
  };

  const [trips, setTrips] = useState([]);

  const handleAddTripSubmit = (
    name,
    startDate,
    endDate,
    location,
    imageUrl,
    travel
  ) => {
    const newTrip = {
      name,
      startDate,
      endDate,
      location,
      imageUrl,
      travel,
    };
    return addTrip(newTrip)
      .then((addedTrip) => {
        setTrips([addedTrip, ...trips]);
        closeModal();
        return addedTrip;
      })
      .catch((error) => {
        console.error("Error adding trip:", error);
        throw error;
      });
  };

  //Delete a Trip
  const [tripToDelete, setTripToDelete] = useState(null);

  const handleDeleteTrip = (trip) => {
    setTripToDelete(trip);
    setActiveModal("confirmation");
  };

  const handleConfirmDelete = () => {
    if (!tripToDelete) return;

    deleteTrip(tripToDelete._id)
      .then(() => {
        setTrips((prevTrips) =>
          prevTrips.filter((trip) => trip._id !== tripToDelete._id)
        );
        setTripToDelete(null);
        closeModal();
      })
      .catch((error) => {
        console.error("Error deleting trip:", error);
      });
  };

  //Edit a Trip - (Open Trip Editor)
  const [currentTrip, setCurrentTrip] = useState({});

  const handleTripClick = (trip) => {
    setCurrentTrip(trip);
    navigate(`/trip-editor/${trip._id}`);
  };

  // Add an Event
  const [events, setEvents] = useState([]);

  const handleAddEventSubmit = (name, startTime, endTime, location) => {
    const newEvent = {
      name,
      startTime,
      endTime,
      location,
    };
    return addEvent(currentTrip._id, newEvent)
      .then((addedEvent) => {
        setEvents([addedEvent, ...events]);
        return addedEvent;
      })
      .catch((error) => {
        console.error("Error adding event:", error);
        throw error;
      });
  };

  useEffect(() => {
    if (currentTrip && currentTrip._id) {
    } else {
      setEvents([]);
    }
  }, [currentTrip]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleLogin,
        handleLogout,
        updateUser,
      }}
    >
      <CurrentTripContext.Provider
        value={{
          currentTrip,
          setCurrentTrip,
          handleTripClick,
        }}
      >
        <div className="app">
          <div className="app__content">
            <Header
              handleNewTripClick={handleNewTripClick}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    handleNewTripClick={handleNewTripClick}
                    trips={trips}
                    handleDeleteTrip={handleDeleteTrip}
                  />
                }
              />
              <Route
                path="/trips"
                element={
                  <ProtectedRoute
                    element={Trips}
                    isLoggedIn={isLoggedIn}
                    handleNewTripClick={handleNewTripClick}
                    trips={trips}
                    handleDeleteTrip={handleDeleteTrip}
                  />
                }
              />

              <Route
                path="/trip-editor/:tripId"
                element={
                  <ProtectedRoute
                    element={TripEditor}
                    isLoggedIn={isLoggedIn}
                    handleDeleteTrip={handleDeleteTrip}
                    onAddEvent={handleAddEventSubmit}
                    events={events}
                  />
                }
              />
              <Route
                path="/trip-calendar"
                element={<TripCalendar trips={trips} />}
              />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer
              handleLogout={handleLogout}
              handleUpdateProfileClick={handleUpdateProfileClick}
            />
          </div>
          <RegisterModal
            activeModal={activeModal}
            closeModal={closeModal}
            buttonText="Sign Up"
            switchToLogin={switchToLogin}
            onRegister={handleRegister}
          />
          <LoginModal
            activeModal={activeModal}
            closeModal={closeModal}
            buttonText="Log In"
            switchToRegister={switchToRegister}
            handleLogin={handleLogin}
          />
          <NewTripModal
            activeModal={activeModal}
            closeModal={closeModal}
            buttonText="Save Trip"
            onAddTrip={handleAddTripSubmit}
          />
          <ConfirmationModal
            activeModal={activeModal}
            closeModal={closeModal}
            onConfirm={handleConfirmDelete}
          />
          <EditProfileModal
            activeModal={activeModal}
            closeModal={closeModal}
            buttonText="Update Information"
          />
        </div>
      </CurrentTripContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
