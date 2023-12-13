import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPages/LandingPage";
import SecondLandingPage from "./components/LandingPages/SecondLandingPage";
import { MyContextProvider } from "./Context/MyContext";

const App = () => {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page2" element={<SecondLandingPage />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
};

export default App;
