import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./About.css";
import Container from "react-bootstrap/Container";
import person from "../../assets/tarotimg/Person.jpg";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3 title">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={person}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col className="text d-flex text-center justify-content-center flex-wrap my-details">
              <br />
              <br />
              Spiritually Black is here to inspire and help you grow through
              your spiritual journey!! Tarot reading has been a new passion for
              me. I've always been guided to do some sort of light work because
              a gift/talent that I have finally owned. I'm here to give clarity,
              and wisdom upon the Divine. Help others learn their spiritual
              gifts as well. Let me not just read your past, present, or future
              but let's change our mind perspective as well because of the
              clarification from Divine!!
              <br />
              <br /> <br />
              Tarot card reading is the practice of using tarot cards to gain
              insight into the past, present or future by formulating a
              question, then drawing and interpreting cards. Reading tarot cards
              is a type of cartomancy.
              <br />
              <br /> <br />
              <Col className="d-flex justify-content-center flex-wrap">
                <div></div>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
