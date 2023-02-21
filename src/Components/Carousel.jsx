import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const Mycarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/289622158_568519768114630_7378702661672043124_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ljQsnbpXPnMAX_OMnEZ&_nc_ht=scontent-mba1-1.xx&oh=00_AfCgpR6swqmDquhacfgnTgaC2lgQ2GYVvwrlkHUHiSAInw&oe=63F9753A"
          alt="first slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>We shall put a small description of this slide here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/302534344_611153533851253_2110344119084523003_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3MuO-Wsw6tIAX-MLliz&_nc_ht=scontent-mba1-1.xx&oh=00_AfDVKj0Z4SnFCuUV1LGGCEB74e6rxfmp33s6O1Qbn97gnA&oe=63F9E1DA"
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
