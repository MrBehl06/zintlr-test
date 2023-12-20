import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(false);
  const [secondSharedState, setSecondSharedState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [kycStatus, setKycStatus] = useState("");
  const itemsPerPage = 9;

  const updateSharedState = (newState) => {
    setSharedState(newState);
  };

  const updateSecondSharedState = (newState) => {
    setSecondSharedState(newState);
  };

  const updateSearchTerm = (newTerm) => {
    setSearchTerm(newTerm);
  };
  const updateKycStatus = (newTerm) => {
    setKycStatus(newTerm);
  };

  return (
    <MyContext.Provider
      value={{
        sharedState,
        secondSharedState,
        searchTerm,
        currentPage,
        itemsPerPage,
        kycStatus,
        updateSharedState,
        updateSecondSharedState,
        updateSearchTerm,
        updateKycStatus,
        setCurrentPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
