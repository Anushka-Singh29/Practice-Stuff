// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found! 😵</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to the Homepage</Link>
    </div>
  );
};

export default NotFoundPage;