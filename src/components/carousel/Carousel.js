import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Carousel.css';
import tarot from '../../assets/tarotimg/tarot.jpg';

const Slideshow = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={tarot} alt="First slide" />
        </Carousel.Item>
      </Carousel>
      {/* <ScrollDown /> */}
    </div>
  );
};

export default Slideshow;
