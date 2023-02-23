import React, { Component } from "react";
import Mynav from "./Components/Navbar";
import Mycarousel from "./Components/Carousel";

const Home = () => {
  return (
    <div>
      <Mynav />
      {/* <h1>This is the Home page</h1> */}
      <Mycarousel />
      <h1 className="display-2">Welcome to ICC Meru - The Oaks Church</h1>
      <img src="./Images/img1.png" alt="" />
    </div>
  );
};

export default Home;
