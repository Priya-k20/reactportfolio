import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Portfolio/Layout';
import Home from './Portfolio/Home'; 
import Projects from './Portfolio/Projects';
import Contact from './Portfolio/Contact';  
   
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
 
    
  
