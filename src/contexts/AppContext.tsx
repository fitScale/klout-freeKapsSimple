"use client";

import React, { createContext, useEffect, useReducer } from "react";

export interface AppContextValue {
  appState: AppContextType;
  dispatch: React.Dispatch<AppAction>;
}

export const AppContext = createContext({} as AppContextValue);

interface AppContextType {
  darkTheme: boolean;
  navInvert: boolean;
  cartOpen: boolean;
  menuOpen: boolean;
}

export type AppActionType =
  | "SET_DARK_THEME"
  | "SET_NAV_INVERT"
  | "SET_CART_OPEN"
  | "SET_MENU_OPEN";

export interface AppAction {
  type: AppActionType;
  payload: boolean;
}

function appReducer(state: AppContextType, action: AppAction) {
  const { type, payload } = action;
  switch (type) {
    case "SET_DARK_THEME":
      return {
        ...state,
        darkTheme: payload,
      };
    case "SET_NAV_INVERT":
      return {
        ...state,
        navInvert: payload,
      };
    case "SET_CART_OPEN":
      return {
        ...state,
        cartOpen: payload,
      };
    case "SET_MENU_OPEN":
      return {
        ...state,
        menuOpen: payload,
      };
    default:
      return state;
  }
}

const intialState: AppContextType = {
  darkTheme: false,
  navInvert: false,
  cartOpen: false,
  menuOpen: false,
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [appState, dispatch] = useReducer(appReducer, intialState);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && appState.darkTheme) {
      body.style.backgroundColor = "black";
    } else if (body && !appState.darkTheme) {
      body.style.backgroundColor = "white";
    }
  }, [appState.darkTheme]);

  console.log("Test");

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
