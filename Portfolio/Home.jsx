import React from 'react';
import './Home.css'; 
import profilePic from './photo (2).jpeg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text-content">
          <h1>Shanmugapriya K G</h1>
          <h3>WEB DEVELOPER</h3>
          <p>I am passionate about web development, a field where creativity meets technology. My enthusiasm for this
             role drives me to continuously learn and innovate, transforming ideas into dynamic and engaging web experiences.
             I am dedicated to crafting websites and web applications that are not only functional but also aesthetically pleasing and user-centric.</p>
          <h2>Qualification - MCA</h2>
          <h2>Skills</h2>
          <ul>
            <li>FRONT END - HTML, CSS, JavaScript, React JS, Bootstrap</li>
            <li>BACK END - Java, SpringBoot</li>
            <li>DATABASE - MySQL</li>
          </ul>
        </div>
        <div className="photo-content">
             <img src={profilePic} alt="Shanmugapriya K G" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
