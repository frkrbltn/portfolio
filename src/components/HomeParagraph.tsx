import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scssFiles/HomeParagraph.scss";

function HomeParagraph() {
  return (
    <p className="home-page-style">
      I am a Ph.D. candidate at North Carolina State University, where I also
      earned my Master's degree. My passion is to identify and then address
      security vulnerabilities in hardware and software implementations.
      <br />
      <br />
      My research revolves around the meticulous security analysis within a wide
      range of implementations, including the practice of physical attacks such
      as fault and side-channel attacks. By following this research, I expect to
      improve the awareness of implementation vulnerabilities and enhance the
      defenses of diverse systems. I do also secure implementation with methods
      such as blinding and hiding, ensuring their resilience against
      implementation vulnerabilities.
      <br />
      <br />I possess a profound knowledge of hardware design. Leveraging this
      expertise, I have successfully and securely accelerated diverse
      applications on ASIC/FPGA. Therefore, my Ph.D. dissertation focuses on
      lattice-based crypto-systems for edge-device applications, addressing
      implementation efficiency, flexibility, and security concerns.
    </p>
  );
}

export default HomeParagraph;
