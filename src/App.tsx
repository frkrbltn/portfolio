import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HomeParagraph from "./components/HomeParagraph";
import Breakthroughs from "./components/Breakthroughs";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container style={{ marginTop: "30px" }} className="App" fluid>
      <Row>
        <Col
          xs={2}
          md={2}
          lg={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Image
            src={require("./images/emre-pic.png")}
            style={{ width: "auto", height: "auto", margin: "15px auto" }}
          />
          <Image
            src={require("./images/emre-signature.png")}
            style={{ width: "auto", height: "auto", margin: "10px auto 45px" }}
          />
          <SiGmail className="icon-style" />
          <BsLinkedin className="icon-style" />
          <SiGooglescholar className="icon-style" />
          <FaGithub className="icon-style" />
        </Col>
        <Col xs={10} md={10} lg={10} style={{ marginTop: "45px" }}>
          <Tabs defaultActiveKey="profile" className="mb-3 tab-style" fill>
            <Tab eventKey="home" title="Home">
              <HomeParagraph />
            </Tab>
            <Tab eventKey="publications" title="Publications"></Tab>
            <Tab eventKey="résumé" title="Résumé"></Tab>
            <Tab eventKey="breakthroughs" title="Breakthroughs">
              <Breakthroughs />
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Image src={require("./images/work-graph.png")} />
      </Row>
    </Container>
  );
}

export default App;
