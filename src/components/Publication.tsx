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
    title: "Title of Publication 1",
    author: "Author of Publication 1, Your Name, Another Author",
    year: "Year of Publication 1",
    location: "Location of Publication 1",
    link: "URL of Publication 1",
  },
  // More publications...
  {
    title: "Title of Publication 2",
    author: "Author of Publication 2, Your Name, Another Author",
    year: "Year of Publication 2",
    location: "Location of Publication 2",
    link: "URL of Publication 2",
  },
];

const YOUR_NAME = "Your Name";

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
