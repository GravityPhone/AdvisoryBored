// pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>The Board Is In Session</h1>
      <Link to="/about">Learn More</Link>
    </div>
  );
}

export default HomePage;
