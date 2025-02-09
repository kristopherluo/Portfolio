import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            <span className="purple">Epic | </span>
            <span style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Jul. 2023 – Present
            </span>
            <br />
            <span style={{ marginBlockEnd: 0, color: "rgb(248 240 227)" }}>
            <i>Software Engineer</i>
            </span>
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Proposed and implemented a customizable macro shortcuts feature for nurse documentation using <b>C#</b> and <b>TypeScript</b>, cutting workflow time by <b>93%</b> while enhancing documentation accuracy
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Developed an <b>auto-population</b> feature for the IRF-PAI form using <b>M</b>, saving nurses over <b>8,000</b> clicks per month
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Built reporting dashboards with <b>SQL</b> and <b>M</b>, delivering live performance metrics to over <b>200</b> healthcare organizations
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Reviewed over <b>200</b> peer projects and designs, providing feedback and ensuring quality standards
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Investigated and fixed over <b>50</b> diverse Quality Assurance Notes, enhancing system reliability
              </li>
            </ul>

            <br />
            <span className="purple">Moody's Investors Service | </span>
            <span style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Jun. 2022 – Aug 2022
            </span>
            <br />
            <span style={{ marginBlockEnd: 0, color: "rgb(248 240 227)" }}>
            <i>Software Engineer Intern</i>
            </span>
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Proposed and implemented the use of <b>proxy</b> servers to store data from external calls in API tests
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Developed over <b>150</b> integration tests for Moody’s big data rating application for over <b>30,000</b> issuers, increasing maintainability and function cohesiveness
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Contributed to the <b>RESTful</b> service development of a company infrastructure application
              </li>
            </ul>

            <br />
            <span className="purple">Giant Oak | </span>
            <span style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Jan. 2022 – May 2022
            </span>
            <br />
            <span style={{ marginBlockEnd: 0, color: "rgb(248 240 227)" }}>
              <i>Named-Entity Recognition Researcher</i>
            </span>
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Researched and refined Giant Oak’s Named-Entity Recognition pipeline
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Proposed a translation step to improve Named-Entity Recognition accuracy to <b>97%</b> and save on training costs
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Implemented a data augmentation step to increase training batch size up to <b>200%</b>
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Incorporated a text quality step to filter out <b>90%</b> of low quality data and lingering HTML text in GOST data
              </li>
            </ul>
            <br />

            <span className="purple">Clemson University | </span>
            <span style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            May 2021 – Aug. 2021
            </span>
            <br />
            <span style={{ marginBlockEnd: 0, color: "rgb(248 240 227)" }}>
              <i>Deepfake Research Intern</i>
            </span>
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Researched machine learning algorithms and AI models to detect Deepfake usage in videos
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Studied multiple detection methods such as observing inconsistent corneal specular highlights
              </li>
            </ul>
            <br />

            <span className="purple">Clemson University | </span> 
            <span style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            May 2018 – Aug. 2018            
            </span>
            <br />
            <span style={{ marginBlockEnd: 0, color: "rgb(248 240 227)" }}>
              <i>Data Analysis Intern</i>
            </span>
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Analyzed and modified traffic data collected from Clemson's roads for autonomous vehicle research
                </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Trained convolution neural networks on the collected data
              </li>
            </ul>
          <br />

          <span className="purple">Clemson University | </span> 
            <span style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            May 2017 – Aug. 2017            
            </span>
            <br />
            <span style={{ marginBlockEnd: 0, color: "rgb(248 240 227)" }}>
              <i>Genetics and Biochemistry Research Lab Intern</i>
            </span>
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Genetically engineered rice plants with the vacuolar proton pump gene to enhance their salt tolerance
                </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Learned aseptic techniques, plant tissue culture techniques, bacterial inoculation, and culture for study
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Practiced plant DNA and RNA extraction, plasmid DNA purification, and gel electrophoresis analysis
              </li>
            </ul>
          <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
