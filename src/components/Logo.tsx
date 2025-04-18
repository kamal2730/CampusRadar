import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <div className="radar-circle">
          <div className="radar-pulse"></div>
          <div className="radar-pulse delay-1"></div>
          <div className="radar-pulse delay-2"></div>
        </div>
        <div className="location-dot"></div>
      </div>
      <div className="logo-text">
        <span className="campus">Campus</span>
        <span className="radar">Radar</span>
      </div>
    </div>
  );
};

export default Logo; 