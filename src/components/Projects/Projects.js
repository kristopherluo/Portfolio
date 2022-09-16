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
              imgPath={sudoku}
              title="Sudoku Solver | Python" 
              description="Sudoku program that can take in any sudoku board and solve it using a backtracking algorithm. It has a graphical user interface that allows a user to play the sudoku game. With a press of the spacebar, the program will visually solve the puzzle."
              link="https://github.com/kristopherluo/Sudoku"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gravity_runner}
              title="Gravity Runner | C++"
              description="Game where you control an alien capable of reversing gravity. Designed and implemented all sprite animations and menus."
              link="https://github.com/kristopherluo/GravityRunner"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              title="Tic-Tac-Toe | Java"
              description="Tic-Tac-Toe game with a graphical user interface. The number of rows, columns, players, and moves in a row to win are customizable."
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