import React from "react";
import Container from "react-bootstrap/Container";
import "./scssFiles/Resume.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Resume() {
  return (
    <Container
      style={{ marginTop: "30px" }}
      className="resume-custom-style"
      fluid
    >
      <Row>
        <Col xs={5} md={5} lg={5} style={{ marginRight: "auto" }}>
          <h2 className="highlight">Work Experience</h2>
          <p>
            North Carolina State University <br />
            Hardware Security Researcher
            <br />
            <span className="date">Aug/2019 - Present</span>
          </p>
          <p>
            Microsoft <br /> Security Researcher
            <br />
            <span className="date">June/2022 - Sep/2022</span>
          </p>
          <p>
            Intel <br />
            Security Researcher <br />
            <span className="date">Dec/2020 - Aug/2021</span>
          </p>
          <p>
            YongaTek <br /> ASIC/FPGA Design&Verification Engineer <br />
            <span className="date">Mar/2017 - Aug/2019</span>
          </p>
        </Col>
        <Col xs={5} md={5} lg={5} style={{ marginLeft: "auto" }}>
          <h2 className="highlight">Education</h2>
          <p>
            Doctor of Philosophy Degree <br /> North Carolina State University
            <br />
            <span className="date">Jan/2020 - October/2023</span>
          </p>
          <p>
            Master’s Degree <br /> North Carolina State University <br />
            <span className="date">Aug/2019 - May/2021</span>
          </p>
          <p>
            Bachelor’s Degree <br /> Yildiz Technical University <br />
            <span className="date">Sep/2012 - Mar/2017</span>
          </p>
        </Col>
      </Row>
      <Row
        style={{ margin: "20px auto 0px", fontSize: "20px" }}
        className="note-row"
      >
        <span className="note-highlight">Note:</span> Please contact me at my
        email address if you want to know more about my experience
      </Row>
    </Container>
  );
}

export default Resume;
