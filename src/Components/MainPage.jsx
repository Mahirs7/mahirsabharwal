import React from 'react';
import './MainPage.css'; 
import logo from '../Assets/logo.png';
import { TypeAnimation } from 'react-type-animation';
import { Link } from '@mui/material';
import { GitHub, LinkedIn, Description, Web } from '@mui/icons-material';

const MainPage = () => {
  return (
    <div className="main">
      <h4>Hey there , </h4>
      <h1>I am Mahir Sabharwal.</h1>
      <h3>I'm a Math and Computer Science student @ The University of Illinois Urbana-Champaign</h3>
      <TypeAnimation
        sequence={[
          'I am an innovator',
          1000,
          'I am an entrepreneur',
          1000,
          'I am a technology enthusiast',
          1000,
          'I am a writer',
          1000,
          'I am a sports fanatic',
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2.5rem", margin: "25px", color:"aqua" }}
        repeat={Infinity}
      />
      <div className="contact">
        <a href="mailto:mahirsabharwal2005@gmail.com">Contact Me</a>
      </div>
      <div className="social-links">
        <Link href="https://github.com/Mahirs7" target="_blank" rel="noopener">
          <GitHub fontSize="large" />
        </Link>
        <Link href="https://linkedin.com/in/mahirsabharwal" target="_blank" rel="noopener">
          <LinkedIn fontSize="large" />
        </Link>
        <Link href="https://your-blog.com" target="_blank" rel="noopener">
          <Web fontSize="large" />
        </Link>
        <Link href="https://your-resume-link.com" target="_blank" rel="noopener">
          <Description fontSize="large" />
        </Link>
      </div>
    </div>
    
  );
}

export default MainPage;
