'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-4"> MyWebsite</h1>
          <p className="text-sm leading-6">
            Building modern web applications with Next.js, Tailwind CSS, and
            powerful technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources / Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/blog"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for updates
          </p>

          {/* Newsletter Input */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-md border border-gray-600 bg-indigo-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors duration-300">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-gray-100 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-indigo-700 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
