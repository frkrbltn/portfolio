import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HomeParagraph from "./components/HomeParagraph";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <img src={require("./images/emre-pic.png")} alt="ProfilePicture" />

        <div>
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
