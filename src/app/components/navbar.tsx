import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide">
          <Link href="/" className="hover:text-gray-200 transition duration-300">
            🎬 Movie<span className="text-yellow-300">App</span>
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/" className="relative group transition duration-300">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/movies" className="relative group transition duration-300">
              Movies
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/tv-show" className="relative group transition duration-300">
              TV Show
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* Call to Action */}
        <div>
          <a href="#" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
