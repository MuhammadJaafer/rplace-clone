import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { act } from "react-dom/test-utils";
import { type } from "@testing-library/user-event/dist/type";
const canvas = Array(30000).fill(`#fff`);
const colors = [
  "#ffffff",
  "#1EC409",
  "#3F9F35",
  "#F70103",
  "#1FDBE8",
  "#0303eb",
  "#f7eb00",
  "#e801b6",
  "#CA73E2",
  "#ff6200",
  "#772F00",
  "#6b6b65",
  "#c7c6ba",
  "#000000",
];

export const Context = createContext();
export const Reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_COLOR":
      return { ...state, currentColor: action.payload };
    case "SIGN_IN":
      return { ...state, user: action.payload };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    currentColor: "#000000",
    canvas,
    colors,
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsup = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      console.log(user);
      unsup();
    });
  }, []);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
