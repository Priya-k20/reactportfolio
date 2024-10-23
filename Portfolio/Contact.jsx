import React from 'react';
import './Contact.css'; 

const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'https://www.linkedin.com/in/shanmugapriya-k-g-b71a9a227?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJPqYIM%2FWT42GruYzNgNdlQ%3D%3D';
  };

  return (
      <div className="contact">
      <div className="content">

      <h1>Contact Page</h1>
      <p>Click below to visit my LinkedIn profile.</p>
      <button className="button" onClick={handleContactClick}>Contact Me</button>
    </div>
    </div>
  );
};

export default Contact;
