import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Header } from "./Components/Main";
import Home from "./home";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./home";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        {/* <Mynav /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" component={Contact Us} /> */}
        </Routes>
      </div>
    </Router>
  );
};
export default App;
