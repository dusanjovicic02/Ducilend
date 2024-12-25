import React from 'react';
import logo from '../assets/logo.svg'; 
import userIcon from '../assets/user-icon.png';

function Header() {
  return (
    <header className="w-full bg-white py-4 px-8 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Agrario Energy Logo" className="h-10" />
        <span className="text-lg font-semibold text-teal-600">Agrario Energy</span>
      </div>
      <div>
        <img
          src={userIcon}
          alt="User Icon"
          className="h-10 w-10 rounded-full border-2 border-teal-300"
        />
      </div>
    </header>
  );
}

export default Header;

