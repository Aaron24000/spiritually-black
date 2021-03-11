import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Donation.css';

const Donate = () => {
    return (
      <div id="donate">
        <h1 className="pt-3 text-center font-details-b pb-3 title">DONATIONS</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="https://www.paypal.com/paypalme/rhondarhonda0718" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="aaron.nobles@outlook.com">
                  <i class="fab fa-paypal"></i> paypal
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://cash.app/$RhondaRhonda0718" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-success" title="Visit my LinkenIn">
                  <i class="fas fa-dollar-sign"></i> Cashapp
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  };
  
  export default Donate;