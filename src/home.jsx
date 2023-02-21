import React, { Component } from "react";
import Mynav from "./Components/Navbar";
import Mycarousel from "./Components/Carousel";

const Home = () => {
  return (
    <div>
      <Mynav />
      {/* <h1>This is the Home page</h1> */}
      <Mycarousel />

      <img src="/public/img1.png" alt="" />
    </div>
  );
};

export default Home;
