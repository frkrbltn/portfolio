import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scssFiles/Breakthroughs.scss";

function Breakthroughs() {
  return (
    <p className="home-page-style font-custom-style">
      I am thrilled to share with you my journey as a Ph.D. candidate.
      Throughout my academic and industry career, I have dedicated myself to
      discovering and solving unique implementation vulnerabilities.
      <br />
      <br />
      One of my notable achievements includes pioneering the first side-channel
      attacks on post-quantum cryptography algorithms. By examining
      vulnerabilities and understanding the intricate details of these
      algorithms, I strive to fortify their implementations against potential
      threats.
      <br />
      <br />
      However, my expertise extends beyond attacking systems; I am equally
      committed to defending them. I have employed methods such as blinding and
      hiding to protect implementations, ensuring their resilience against
      potential attacks. Implementing classical cryptography algorithms securely
      through techniques like masking and shuffling has been a fascinating
      avenue for me. My effort has been rewarded with multiple patents and
      scientific papers.
      <br />
      <br />
      Currently, I am immersed in the secure implementations of arithmetic
      operations, further enhancing the robustness of various systems. Note that
      this topic has not been studied well since the cryptosystems mostly rely
      on Boolean operations. However, I am determined to bridge this gap by
      delving deeper into this domain, aiming to make significant contributions
      and generate a series of impactful publications that will bear my name.
      Stay tuned for exciting developments and new insights to further advance
      our understanding and practical applications in this field.
      <br />
      <br />I am also ready to gain more experience in fault injection attacks.
      These attacks are called invasive attacks and are harder to mitigate. I
      have identified various implementation vulnerabilities with side-channel
      attacks. Now, this is the time for the fault attacks.
    </p>
  );
}

export default Breakthroughs;
