import React from 'react';
import { logo } from '../../assets';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white p-4 fixed top-8 left-0 w-full z-50 px-[7.5rem]">
      <div className="font-bold">
        <img className='w-36' src={logo} alt="" />
      </div>
      <ul className="flex space-x-24 px-20 py-4 rounded-full bg-[#c1c1c1] bg-opacity-10">
        <li>Home</li>
        <li>About</li>
        <li>Feature</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default Navbar;
