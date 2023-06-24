// pages/AboutPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Placeholder text about your application.</p>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default AboutPage;
