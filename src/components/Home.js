// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user';  // Import 'username' and 'city' from user.js

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;  // Export Home component

