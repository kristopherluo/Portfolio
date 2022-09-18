import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import casual_shot from "../../Assets/casual_shot.PNG";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, World! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name"> KRISTOPHER LUO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0, position: "fixed", right: 200, width: "500px", height: "auto" }}>
              <img src={casual_shot} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
