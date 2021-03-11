import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import tarot1 from "../../assets/tarotimg/wallpaperflare.com_wallpaper (1).jpg";
import tarot2 from "../../assets/tarotimg/wallpaperflare.com_wallpaper (2).jpg";
import tarot3 from "../../assets/tarotimg/wallpaperflare.com_wallpaper (3).jpg";
import tarot4 from "../../assets/tarotimg/wallpaperflare.com_wallpaper (4).jpg";

const Services = () => {
  return (
    <div id="services">
      <h1 className="pt-3 text-center font-details pb-3 title">SERVICES</h1>
      <Container>
        <CardDeck className="text-center" style={{ width: "" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tarot1} />
            <Card.Body>
              <Card.Title>30 Minute Reading</Card.Title>
              <Card.Text>
              This will consist of a 30 minute session that comes with an 8 card spread and 4 advice cards.
              </Card.Text>
              <Button variant="primary">$24.99</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tarot2} />
            <Card.Body>
              <Card.Title>45 Minute Reading</Card.Title>
              <Card.Text>
              This will consist of a 45 minute session that comes with an 8 card spread and 8 advice cards.
              </Card.Text>
              <Button variant="primary">$29.99</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tarot3} />
            <Card.Body>
              <Card.Title>55 Minute Reading</Card.Title>
              <Card.Text>
              This will consist of a 55 minute session that comes with a 10 card spread and 4 advice cards.
              </Card.Text>
              <Button variant="primary">$34.99</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tarot4} />
            <Card.Body>
              <Card.Title>65 Minute Reading</Card.Title>
              <Card.Text>
              This will consist of a 55 minute session that comes with a 10 card spread and 8 advice cards.
              </Card.Text>
              <Button variant="primary">$39.99</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Services;
