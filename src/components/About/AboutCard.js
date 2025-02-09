import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/KristopherLuo-Resume.pdf";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Hi! I'm <span className="purple">Kristopher Luo</span>
            , and I'm currently a software engineer at Epic located in Madison Wisconsin. I graduated from Clemson University with a B.S. in Computer Science and a minor in Business Management.
            <br />
            <br />
            I love building creative and efficient solutions and constantly exploring new technologies. Whether it’s developing software, optimizing performance, or learning something new, I enjoy the challenge of solving problems through code.
            <br />
            <br />
            Outside of work, you’ll often find me playing music, keeping up with the latest tech trends, or working on personal projects. I'm always excited to connect, collaborate, and grow as a developer!.
            <br />
            <br />
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
            <br />
            <br />            
            Apart from computer science, some other activities that I love include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
          </ul>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
