// Education.js
import React from 'react';
import './scssFiles/Education.scss'; // Make sure to create and import an SCSS file for styling

const Education = () => {
  return (
    <div className="education-custom-style">
      <h2 className="highlight">Education</h2>
      <p>
        <strong>Bachelor of Science in Computer Science</strong><br />
        North Carolina State University, Raleigh, NC<br />
        Graduation: May 2024<br />
      </p>
      <br />
      <h3 className='highlight'>Core Computer Science Coursework:</h3>
      <br />
      <ul>
        <li>Data Structures for Computer Scientists</li>
        <li>App Web Development</li>
        <li>Artificial Intelligence</li>
        <li>Database Management Systems</li>
        <li>Advanced Algorithm</li>
        <li>Python Applications</li>
        <li>C and Software Tools </li>
        <li>Introduction to Computing - Java</li>
        <li>Operating Systems</li>
        <li>Software Engineering</li>
        <li>Software Development Fundamentals</li>
        <li>Automated Learning and Data Analysis</li>
        <li>Discrete Mathematics for Computer Scientists</li>
      </ul>
    </div>
  );
};

export default Education;
