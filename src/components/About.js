// src/components/About.js
import React from 'react';
import { image } from '../data/user';  // Import the 'image' variable from user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />  {/* Displaying the image */}
    </div>
  );
}

export default About;  // Export About component
