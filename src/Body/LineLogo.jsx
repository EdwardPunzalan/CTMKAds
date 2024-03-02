import React from 'react';
import logo from '../assets/Logo.png';

function LineLogo() {
  return (
    <div className="w-full overflow-hidden opacity-50 flex justify-center">
      <div className="flex" style={{ gap: '4rem' }}>
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
        <img src={logo} alt="Logo" className="h-12 w-12 hover:grayscale hover:brightness-75" />
      </div>
    </div>
  );
}

export default LineLogo;
