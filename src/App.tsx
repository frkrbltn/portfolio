import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HomeParagraph from "./components/HomeParagraph";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={require("./images/emre-pic.png")}
            style={{ width: "200px", height: "200px", margin: "25px 100px" }}
          />
          <Image
            src={require("./images/emre-signature.png")}
            style={{ width: "150px", height: "150px", margin: "25px 100px" }}
          />
          <SiGmail className="icon-style" />
          <BsLinkedin className="icon-style" />
          <SiGooglescholar className="icon-style" />
          <FaGithub className="icon-style" />
        </div>
        <div className="tabs-container">
          <Tabs defaultActiveKey="profile" className="mb-3 tab-style" fill>
            <Tab eventKey="home" title="Home">
              <HomeParagraph />
            </Tab>
            <Tab eventKey="publications" title="Publications"></Tab>
            <Tab eventKey="résumé" title="Résumé"></Tab>
            <Tab eventKey="breakthroughs" title="Breakthroughs"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
