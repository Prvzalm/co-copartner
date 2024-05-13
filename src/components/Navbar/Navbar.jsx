import React, { useEffect, useState } from "react";
import { close, logo } from "../../assets";
import style from "../../style";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`flex justify-between items-center text-white p-4 fixed transition-all duration-300 ${
        scrolled
          ? `top-0 bg-[#18181B] bg-opacity-40`
          : `md:top-4 top-2 ${style.scrolledNavbar}`
      } left-0 w-full z-50 md:px-[7.5rem] ${scrolled ? "bg-transparent" : ""}`}
    >
      <div className="font-bold">
        <img className="w-36" src={logo} alt="" />
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`hidden md:flex space-x-24 px-20 py-4 rounded-full ${
          "text-white"
        }`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Feature</li>
        <li>Blog</li>
      </ul>
      {isMobileMenuOpen && (
        <ul
          className={`flex h-screen flex-col items-center fixed inset-0 bg-black bg-opacity-85 z-50 pt-20 md:hidden`}
        >
          <li className="absolute top-5 right-5">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 rounded-full"
              aria-label="Close menu"
            >
              <img className="w-10" src={close} alt="" />
            </button>
          </li>
          <li
            className="p-4 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </li>
          <li
            className="p-4 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </li>
          <li
            className="p-4 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Feature
          </li>
          <li
            className="p-4 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
