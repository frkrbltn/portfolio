import React from "react";
import "./scssFiles/Publication.scss";

interface PublicationProps {
  title: string;
  author: string;
  location: string;
  year: string;
  link: string;
}

const publicationsData: PublicationProps[] = [
  {
    title: "A Hardware-Software Co-Design for the Discrete Gaussian Sampling of FALCON Digital Signature",
    author: "Emre Karabulut, Aydin Aysu",
    year: "2023",
    location: "Cryptology ePrint Archive",
    link: "https://eprint.iacr.org/2023/908.pdf",
  },
  // More publications...
  {
    title: "SS-AXI: Secure and Safe Access Control Mechanism for Multi-Tenant Cloud FPGAs",
    author: "Emre Karabulut, Amro Awad, Aydin Aysu",
    year: "2023",
    location: "2023 International Symposium on Circuits and Systems (ISCAS)",
    link: "https://confcats-event-sessions.s3.amazonaws.com/iscas23/uploads/ISCAS_2023_Program_Final.pdf",
  },
  
  {
    title: "PR Crisis: Analyzing and Fixing Partial Reconfiguration in Multi-Tenant Cloud FPGAs",
    author: "Emre Karabulut et al.,",
    year: "2023",
    location: "Proceedings of the 2022 Workshop on Attacks and Solutions in Hardware Security",
    link: "https://dl.acm.org/doi/pdf/10.1145/3560834.3563832",
  },
  
  {
    title: "Deterring side channel analysis attacks for data processors having parallel cryptographic circuits",
    author: "Dumitru-Daniel Dinu, Emre Karabulut, Aditya Katragada, Geoffrey Strongin, Avinash L Varna",
    year: "2022",
    location: "US Patent App. 17/477,028",
    link: "https://patentimages.storage.googleapis.com/c6/06/93/9069a4efc5bf99/US20220150046A1.pdf",
  },
  
  {
    title: "Reveal: Single-trace side-channel leakage of the seal homomorphic encryption library",
    author: "Furkan Aydin, Emre Karabulut, Seetal Potluri, Erdem Alkim, Aydin Aysu",
    year: "2022",
    location: "2022 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    link: "https://par.nsf.gov/servlets/purl/10403568",
  },
  
  {
    title: "Single-trace side-channel attacks on ω-small polynomial sampling: With applications to ntru, NTRU prime, and CRYSTALS-DILITHIUM",
    author: "Emre Karabulut, Erdem Alkim, Aydin Aysu",
    year: "2021",
    location: "2021 IEEE International Symposium on Hardware Oriented Security and Trust (HOST)",
    link: "https://eprint.iacr.org/2022/494.pdf",
  },
  
  {
    title: "An efficient non-profiled side-channel attack on the CRYSTALS-Dilithium post-quantum signature",
    author: "Zhaohui Chen, Emre Karabulut, Aydin Aysu, Yuan Ma, Jiwu Jing",
    year: "2021",
    location: "IEEE 39th International Conference on Computer Design (ICCD)",
    link: "https://research.ece.ncsu.edu/wp-content/uploads/sites/8/Dilithium_SCA_cameraready.pdf",
  },
  
  {
    title: "Efficient, flexible, and constant-time gaussian sampling hardware for lattice cryptography",
    author: "Emre Karabulut, Erdem Alkim, Aydin Aysu",
    year: "2021",
    location: "IEEE Transactions on Computers",
    link: "https://ieeexplore.ieee.org/abstract/document/9522059",
  },
  
  {
    title: "Falcon Down: Breaking Falcon Post-Quantum Signature Scheme through Side-Channel Attacks",
    author: "Emre Karabulut, Aydin Aysu",
    year: "2021",
    location: "IEEE 58th ACM/IEEE Design Automation Conference (DAC)",
    link: "https://csrc.nist.gov/csrc/media/Events/2022/fourth-pqc-standardization-conference/documents/papers/falcon-down-pqc2022.pdf",
  },
  
  {
    title: "RANTT: A RISC-V architecture extension for the number theoretic transform",
    author: "Emre Karabulut, Aydin Aysu",
    year: "2020",
    location: "2020 30th International Conference on Field-Programmable Logic and Applications (FPL)",
    link: "https://par.nsf.gov/servlets/purl/10208114",
  },
  
  {
    title: "An extensive study of flexible design methods for the number theoretic transform",
    author: "Ahmet Can Mert, Emre Karabulut, Erdinç Öztürk, Erkay Savaş, Aydin Aysu",
    year: "2020",
    location: "IEEE Transactions on Computers",
    link: "https://par.nsf.gov/servlets/purl/10208110",
  },
  
  {
    title: "A flexible and scalable NTT hardware: Applications from homomorphically encrypted deep learning to post-quantum cryptography",
    author: "Ahmet Can Mert, Emre Karabulut, Erdinç Öztürk, Erkay Savaş, Aydin Aysu",
    year: "2020",
    location: "2020 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    link: "https://past.date-conference.com/proceedings-archive/2020/pdf/0695.pdf",
  },
  
  {
    title: "Implementation of different architectures of forward 4× 4 integer DCT for H. 264/AVC encoder",
    author: "Bunji Antoinette Ringnyu, Ali Tangel, Emre Karabulut",
    year: "2017",
    location: "2017 10th International Conference on Electrical and Electronics Engineering (ELECO)",
    link: "https://ieeexplore.ieee.org/abstract/document/8266174",
  },
  
  //{
  //  title: "Title of Publication 2",
  //  author: "Author of Publication 2, Emre Karabulut, Another Author",
  //  year: "Year of Publication 2",
  //  location: "Location of Publication 2",
  //  link: "URL of Publication 2",
  //},
];

const YOUR_NAME = "Emre Karabulut";

const Publication: React.FC<PublicationProps> = ({
  title,
  author,
  location,
  year,
  link,
}) => {
  const authorsParts = author.split(YOUR_NAME);

  return (
    <li>
      <a href={link}>{title}</a>,&nbsp;
      {authorsParts.map((part, i) => (
        <React.Fragment key={i}>
          {i !== 0 && <span className="highlight">{YOUR_NAME}</span>}
          {part}
        </React.Fragment>
      ))}
      , {location}, {year}
    </li>
  );
};

const Publications: React.FC = () => (
  <ul className="publication-custom-style">
    {publicationsData.map((publication, index) => (
      <Publication key={index} {...publication} />
    ))}
  </ul>
);

export default Publications;
