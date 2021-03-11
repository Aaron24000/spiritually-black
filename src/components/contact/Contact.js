
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Contact.css';

const Contact = () => {
    return (
      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3 title">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:derhonda15@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="aaron.nobles@outlook.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.instagram.com/spiritually_black/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="Visit my LinkenIn">
                    <i className="fab fa-instagram"></i> Instagram
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://twitter.com/spirituallyblack" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="My other projects">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  };
  
  export default Contact;