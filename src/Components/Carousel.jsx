import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const Mycarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img1.png"
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
          src="/public/logo.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>We shall put a small description of this slide here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Mycarousel;
