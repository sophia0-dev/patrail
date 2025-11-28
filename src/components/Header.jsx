import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <nav className="space-x-6 text-gray-300">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Peditraily</a>
        <a href="#" className="hover:text-white">Clanujaz9</a>
      </nav>
      <button className="bg-gray-700 text-sm px-4 py-1 rounded text-white hover:bg-gray-600">
        Ceglas Hepnats
      </button>
    </header>
  );
};

export default Header;
