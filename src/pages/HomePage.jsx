// src/pages/HomePage.jsx
import React from 'react';
import Background from '../components/Background';

export default function HomePage() {
  return (
    <Background showText={true}>
      {/* Social‐media icons below the animating text */}
      <div className="home-social-links">
        <a href="https://github.com/EzekielBrown" aria-label="Github">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ezekiel-brown-a3995a217/" aria-label="Linkedin">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/zekbrown/" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </Background>
  );
}
