import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scssFiles/HomeParagraph.scss";

function HomeParagraph() {
  return (
    <p className="home-page-style" style={{ display: "block" }}>
      I'm <b>Furkan Karabulut</b>. I studied Computer Science at <b>North Carolina State University</b> and now work as a software engineer at <b>Relias</b>, where we build enterprise software for healthcare and compliance training organizations.
      <br />
      <br />
      Most of my work is on the backend in <b>C#, .NET, and SQL</b>. I also build features on the frontend in <b>Angular and TypeScript</b>, and have gotten into the infrastructure side over time — writing Azure DevOps pipelines, working with Bicep for cloud resource provisioning, and contributing to <b>multi-region production deployments</b>. I have taken on release coordination and written internal documentation to help other engineers ramp up on new parts of the codebase.
      <br />
      <br />
      Before Relias, I worked in <b>post-quantum cryptography</b> research at <b>PQSecure Technologies</b>. Post-quantum cryptography is about building security systems that hold up against quantum computers, which will eventually break widely used standards like RSA and ECDSA. My research was in hash-based digital signature schemes, specifically <b>XMSS and LMS</b>. I hold <b>two sole-inventor patents</b> from that work, both addressing memory-constrained environments where these schemes would otherwise be too expensive to run.
      <br />
      <br />
      Most of the personal projects I have built started from something I actually needed. When I was looking for an apartment in Raleigh as a student, I built a data analysis tool to compare options across neighborhoods, cost, and commute distance. It was a Jupyter Notebook project, nothing fancy, but it helped me make a real decision.
      <br />
      <br />
      Outside of work I am still building. I have a <b>restaurant application</b> in progress and a personal <b>AI tooling setup</b> I use to improve my own development workflow. The motivation is usually the same: something was missing, and building felt like the most direct way to fix it.
      <br />
      <br />
      Right now I am focused on going deeper in <b>cloud architecture and system design</b>. Post-quantum security is still something I think about and expect to return to.
      <br />
      <br />
      If you want to talk about engineering, projects, or anything in this portfolio, feel free to reach out.
    </p>
  );
}

export default HomeParagraph;
