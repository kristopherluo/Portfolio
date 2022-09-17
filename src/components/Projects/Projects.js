import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import sudoku from "../../Assets/Projects/sudoku.png";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import gravity_runner from "../../Assets/Projects/gravity_runner.png";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gravity_runner}
              title="Gravity Runner | C++"
              description="2D game where you control a running alien capable of reversing gravity. You must avoid ALL obstacles. I desgined the game and implemented all sprite animations and menus within it."
              link="https://github.com/kristopherluo/GravityRunner"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sudoku}
              title="Sudoku Solver | Python" 
              description="Program that can take in any valid sudoku board and visually solve it using a backtracking algorithm. It also has a GUI that allows a user to play the sudoku game."
              link="https://github.com/kristopherluo/Sudoku"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              title="Tic-Tac-Toe | Java"
              description="Tic-Tac-Toe game with a GUI, where the number of rows, columns, players, and consecutive occupied spaces to win are customizable."
              link="https://github.com/kristopherluo/Tic-Tac-Toe"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p style = {{ color: "white" }}>
              Feel free to <span className="purple">connect </span>with me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:kluo618@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:8646437029"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kristopher-luo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/kristopherluo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kristopherluo/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
