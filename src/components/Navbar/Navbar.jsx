import React, { useEffect, useState } from 'react';
import { logo } from '../../assets';
import style from '../../style';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center text-white p-4 fixed transition-all duration-300 ${scrolled ? `top-0 ${style.transparentNavbar}` : `top-8 ${style.scrolledNavbar}`} left-0 w-full z-50 px-[7.5rem] ${scrolled ? 'bg-transparent' : ''}`}>
      <div className="font-bold">
        <img className='w-36' src={logo} alt="" />
      </div>
      <ul className={`flex space-x-24 px-20 py-4 rounded-full ${scrolled ? 'bg-[black] bg-opacity-60' : 'bg-[#c1c1c1] bg-opacity-10'}`}>
        <li>Home</li>
        <li>About</li>
        <li>Feature</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default Navbar;
