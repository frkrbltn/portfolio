import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import HomeParagraph from "./components/HomeParagraph";
import Breakthroughs from "./components/Breakthroughs";
import Education from "./components/Education";
import Expertise from "./components/Expertise";
import Resume from "./components/Resume";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function App() {
  const openLinkedln = () => {
    window.open("https://www.linkedin.com/in/furkan-karabulut01/");
  };
  const openGithub = () => {
    window.open("https://github.com/frkrbltn");
  };
  

  const openGmail = () => {
    const gmail = 'frkrbltn2332@gmail.com';
    window.open(`mailto:${gmail}`);
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
            src={require("./images/furkan-profile.png")}
            className="img-fluid"
            style={{ width: "auto", height: "250px", margin: "15px auto 30px" }}
            fluid
            roundedCircle
          />
          <Image
            src={require("./images/signature.png")}
            style={{ width: "auto", height: "auto", margin: "10px auto 30px" }}
            className="img-fluid"
            fluid
          />
          <Badge
            pill bg="dark"
            style={{
              margin: "1px auto 5px auto",
              fontSize: "1.2rem",
            }}
          >
            Connect with Me
          </Badge>
          <SiGmail className="icon-style" onClick={openGmail} style={{ margin: "20px auto 30px" }}/>
          <BsLinkedin className="icon-style" onClick={openLinkedln} style={{ margin: "10px auto 30px" }}/>
          <FaGithub className="icon-style" onClick={openGithub} style={{ margin: "10px auto 30px" }}/>
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
            <Tab eventKey="education" title="Education">
              <Education />
            </Tab>
            <Tab eventKey="résumé" title="Résumé">
              <Resume />
            </Tab>
            <Tab eventKey="resume" title="Expertise">
              <Expertise />
            </Tab>
            {/* <Tab eventKey="breakthroughs" title="Breakthroughs">
              <Breakthroughs />
            </Tab> */}
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Image src={require("./images/work-graph.png")} className="last-row" />
      </Row>
    </Container>
  );
}

export default App;
