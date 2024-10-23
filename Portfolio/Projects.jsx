import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project-card">
        <h4>BUILD AN ONLINE VOTING SYSTEM IN PHP</h4>
        <ul>
          <li>This is a simple voting system created using PHP without the use of any framework.</li>
          <li>It has a preview feature so voters can preview their selected candidates and they can vote for multiple candidates as well.</li>
          <li>The system can also generate a report (PDF) of voting results.</li>
        </ul>
      </div>

      <div className="project-card">
        <h4>E-MAIL SPAM DETECTION USING MACHINE LEARNING</h4>
        <ul>
          <li>Spam e-mail detection involves applying algorithms and rules to locate and delete unwanted or unwelcome e-mails.</li>
          <li>These algorithms and guidelines frequently look at an e-mail's content, the sender's reputation, and other factors to determine if it is likely to be spam.</li>
          <li>Multi-Layer Perceptron (MLP) gives the most accurate results and prediction over the data with about 98% accuracy.</li>
        </ul>
      </div>

      <div className="project-card">
        <h4>STUDENT RESULT MANAGEMENT SYSTEM IN PHP</h4>
        <ul>
          <li>The main objective of the project is to provide the examination result to the student in a simple way.</li>
          <li>This project is useful for students and institutions for getting the results in a simple manner.</li>
          <li>By a result analyzer with subject status and marks is an application tool for displaying the results in a secure way.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
