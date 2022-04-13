import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1>App Placeholder</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
}
