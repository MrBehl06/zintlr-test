// MyContext.js
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(false);
  const [secondSharedState, setsecondSharedState] = useState(null);

  const updateSharedState = (newState) => {
    setSharedState(newState);
  };
  const updatesecondSharedState = (newState) => {
    setsecondSharedState(newState);
  };

  return (
    <MyContext.Provider
      value={{
        sharedState,
        secondSharedState,
        updateSharedState,
        updatesecondSharedState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
