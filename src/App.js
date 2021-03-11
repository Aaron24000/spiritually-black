import "./App.css";
import Navigate from "./components/navbar/Navbar";
import React from "react";
import Slideshow from "./components/carousel/Carousel";
import Title from "./components/typewriter/Title";
import About from "./components/about/About";
import Fade from "react-reveal";
import Services from "./components/options/Services";
import Contact from "./components/contact/Contact.js";
import Donate from "./components/donation/Donation.js";
import Footer from "./components/footer/Footer";
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap';
import Slide from "react-reveal/Slide";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Slideshow />
      <Title />
      <Navigate />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/tarotimg/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Slide bottom duration={500}>
          <Services />
          </Slide>
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Contact />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Donate />
        </Slide>
      </Container>

      <hr />
      <Footer />
    </div>
  );
};

export default App;