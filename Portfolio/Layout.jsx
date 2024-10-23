import React from 'react';
import { Link, Outlet } from 'react-router-dom';
 import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
