'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo and About */}
          <div className="mb-6 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="SehatSaathi Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <span className="self-center text-2xl font-semibold dark:text-white">
                SehatSaathi
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your trusted healthcare companion providing 24/7 medical assistance and support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-500">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/chat-bot" className="hover:text-blue-600 dark:hover:text-blue-500">
                    Chat Bot
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4 flex items-center">
                  <HiLocationMarker className="mr-2" />
                  <span>123 Healthcare St, Medical City</span>
                </li>
                <li className="mb-4 flex items-center">
                  <HiPhone className="mr-2" />
                  <a href="tel:+911234567890" className="hover:text-blue-600">
                    +91 123 456 7890
                  </a>
                </li>
                <li className="flex items-center">
                  <HiMail className="mr-2" />
                  <a href="mailto:contact@sehat.com" className="hover:text-blue-600">
                    contact@sehat.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 SehatSaathi™. All Rights Reserved.
          </span>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-white">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 dark:hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 dark:hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-800 dark:hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}