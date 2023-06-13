import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img4 from "./Images/img4.jpeg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.png";

const Mycarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img7} alt="first slide" />
        <Carousel.Caption>
          {/* <h1>Isiah 62:3</h1> */}
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img5} alt="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>We shall put a small description of this slide here</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img6} alt="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>We shall put a small description of this slide here</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Mycarousel;
