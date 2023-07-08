import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import HomeParagraph from "./components/HomeParagraph";
import Breakthroughs from "./components/Breakthroughs";
import Publications from "./components/Publication";
import Expertise from "./components/Expertise";
import Resume from "./components/Resume";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

function App() {
  const openLinkedln = () => {
    window.open("https://www.linkedin.com/in/emre-karabulut-bb7b78104/");
  };
  const openGithub = () => {
    window.open("https://github.com/ekarabu");
  };
  const openGoogleScholar = () => {
    window.open("https://scholar.google.com/citations?hl=en&user=pKeLyC8AAAAJ");
  };

  return (
    <Container style={{ marginTop: "30px" }} className="App" fluid>
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 2, order: 1 }}
          lg={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Image
            src={require("./images/emre-pic.png")}
            className="img-fluid"
            style={{ width: "auto", height: "auto", margin: "15px auto" }}
            fluid
          />
          <Image
            src={require("./images/emre-signature.png")}
            style={{ width: "auto", height: "auto", margin: "10px auto 45px" }}
            className="img-fluid"
            fluid
          />
          <Badge
            bg="success"
            style={{
              margin: "-20px auto 5px auto",
              fontSize: "1.2rem",
            }}
          >
            Security Researcher
          </Badge>
          <h5
            style={{
              margin: "15px auto 15px auto",
              textAlign: "center",
            }}
          >
            emre.karabulut.dde at gmail.com
          </h5>
          <BsLinkedin className="icon-style" onClick={openLinkedln} />
          <SiGooglescholar className="icon-style" onClick={openGoogleScholar} />
          <FaGithub className="icon-style" onClick={openGithub} />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 10, order: 1 }}
          lg={10}
          style={{
            marginTop: "40px",
            maxHeight: "80vh", // Set this to desired height
            overflowY: "auto", // Enable vertical scroll when content exceeds maxHeight
          }}
        >
          <Tabs defaultActiveKey="home" className="mb-3 tab-style" fill>
            <Tab eventKey="home" title="Home">
              <HomeParagraph />
            </Tab>
            <Tab eventKey="publications" title="Publications">
              <Publications />
            </Tab>
            <Tab eventKey="résumé" title="Résumé">
              <Resume />
            </Tab>
            <Tab eventKey="resume" title="Expertise">
              <Expertise />
            </Tab>
            <Tab eventKey="breakthroughs" title="Breakthroughs">
              <Breakthroughs />
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Image src={require("./images/work-graph.png")} className="img-fluid" />
      </Row>
    </Container>
  );
}

export default App;
