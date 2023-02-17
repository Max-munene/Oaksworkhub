import React, { Component } from "react";
import Mynav from "../Components/Navbar";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    //   <Mynav />
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/img1" alt="first slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>We shapp put a small description of this slide here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
