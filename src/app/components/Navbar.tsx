"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Montserrat, Poppins } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full max-w-[1196px] mx-auto h-[41px] relative z-50">
      <div className="flex items-center justify-between h-full px-0">
        {/* Logo and Portfolio */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={30}
            height={30}
            priority
          />
          <span
            className={`text-2xl font-bold ${montserrat.className}`}
            style={{ fontSize: "34px" }}
          >
            Portfolio
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 text-gray-700 ${
            poppins.className
          } absolute md:static bg-zinc-300 md:bg-transparent top-[41px] right-0 w-half md:w-auto z-50`}
        >
          <li className="list-none">
            <Link
              href="/"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/projects"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Projects
            </Link>
          </li>
          
          <li className="list-none">
            <Link
              href="/skills"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Skills
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/experience"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Experience
            </Link>
          </li>
          
          <li className="list-none">
            <Link
              href="/literarywork"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Literary Work
            </Link>
          </li>

          <li className="list-none">
            <Link
              href="/myvideos"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              My Videos
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/blog"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Blog
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/contact"
              className="block px-4 py-2 text-[16px] font-medium hover:text-gray-900"
            >
              Contact
            </Link>
          </li>
          

        </ul>
      </div>
      {/* The dropdown menu will overlay on top of the hero section */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute inset-0 bg-black bg-opacity-50 md:hidden z-40`}
        onClick={() => setIsMenuOpen(false)} // Close menu when clicked outside
      ></div>
    </nav>
  );
};

export default Navbar;
