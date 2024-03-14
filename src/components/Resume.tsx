import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./scssFiles/Resume.scss";
import resumePDF from "./fkarabu_resume.pdf";

function Resume() {
  return (
    <Container className="resume-custom-style" fluid style={{ marginTop: "30px" }}>
      <Row className="note-row" style={{ margin: "20px auto 0px", fontSize: "20px" }}>
        <a href={resumePDF} target="_blank" download="fkarabu_resume.pdf" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="note-highlight">Note:</span> For a detailed view of my resume, including my education and comprehensive work experience, please click this line to download.
        </a>
      </Row>
      <Row><br /></Row>
      
      <Row><br /></Row>
      <Row style={{ display:"flex", alignItems: "center", flexDirection:"column"}}>
        <Col xs={12} md={12} lg={10} >
          <h2 className="highlight">Quick Overview of My Experience</h2>
          <p>
            <h3>Software Engineer (Intern), Live Oak Bank</h3>
            <span className="date">June/2023 - August/2023</span><br />
            Full-stack development with a focus on RESTful API and Front-end tasks using CSS, Bootstrap, and React. Explored Docker, Terraform, and AWS.
          </p>
          <p>
            <h3>Software Engineer (Part-Time), PQSecure Technologies</h3>
            <span className="date">January/2023 - June/2023</span><br />
            Memory Optimization in data structures, contributing to 2 patent applications.
          </p>
          <p>
            <h3>Undergraduate Researcher, North Carolina State University</h3>
            <span className="date">June/2022 - November/2022</span><br />
            Focused on Algorithm Profiling & Efficiency Optimization in academic projects.
          </p>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Resume;
