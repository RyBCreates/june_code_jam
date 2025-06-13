import { baseUrl } from "./constants";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getToken = () => {
  return localStorage.getItem("jwt");
};

export const getTrips = () => {
  return fetch(`${baseUrl}/trips`).then(checkResponse);
};

export const addTrip = (trip) => {
  const token = getToken();
  return fetch(`${baseUrl}/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(trip),
  }).then(checkResponse);
};

export const deleteTrip = (id) => {
  const token = getToken();
  return fetch(`${baseUrl}/trips/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export function updateProfile({ name }) {
  const token = getToken();
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  }).then(checkResponse);
}

// Getting all Events
export const getEvents = (tripId) => {
  const token = getToken();
  return fetch(`${baseUrl}/events/${tripId}/events`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

// Adding Events to the Trip Schedule
export const addEvent = (tripId, eventData) => {
  const token = getToken();
  return fetch(`${baseUrl}/events/${tripId}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  }).then(checkResponse);
};
