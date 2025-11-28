import React from "react";
const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full w-60 bg-[#1C1C1C] p-5 z-50
                  transform transition-transform duration-300 ease-in-out
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <h2 className="text-xl font-bold mb-10">PALTRAIL</h2>
      <ul className="space-y-4 text-gray-300">
        <li>Home</li>
        <li>Discover</li>
        <li>My Pathway</li>
        <li>PAL Score</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};


export default Sidebar;


