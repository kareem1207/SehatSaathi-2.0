'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
// import "@/app/globals.css"
import { DarkMode } from "@/Components/DarkMode"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex relative top-0 left-0 right-0 bg-white shadow-md z-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4" ref={menuRef}>
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
            <Image 
              src="/logo.png" 
              alt="Logo"
              width={90}
              height={40}
              priority
              className="transition-opacity duration-300"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              Home
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              Contact
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              About
            </Link>
            <Link href="/sign-in" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
              Sign In
            </Link>
            <DarkMode />
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none dark:text-white"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ${isMenuOpen ? 'top-full opacity-100' : '-top-96 opacity-0'}`}>
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              Home
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              Contact
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              About
            </Link>
            <Link href="/chat-bot" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-white dark:hover:text-blue-600">
              Chat bot
            </Link>
            <Link href="/sign-in" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 w-fit">
              Sign In
            </Link>
            <div className="pb-2">
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};