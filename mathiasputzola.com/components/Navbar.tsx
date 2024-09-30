// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.707 5.293a1 1 0 010 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <li className="md:ml-4">
            <Link href="/" className="block px-2 py-1 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li className="md:ml-4">
            <Link href="/about" className="block px-2 py-1 hover:bg-gray-700">
              About
            </Link>
          </li>
          <li className="md:ml-4">
            <Link href="/services" className="block px-2 py-1 hover:bg-gray-700">
              Services
            </Link>
          </li>
          <li className="md:ml-4">
            <Link href="/contact" className="block px-2 py-1 hover:bg-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;