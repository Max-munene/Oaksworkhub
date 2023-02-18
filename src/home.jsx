import React, { Component } from "react";
import Mynav from "./Components/Navbar";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Mynav />
      <h1>This is the Home page</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/img1.jpg"
            alt="first slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>We shall put a small description of this slide here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/img2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>We shall put a small description of this slide here</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
