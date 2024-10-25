import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* R&A Grocery Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">R&A Grocery</h2>
          <p className="text-gray-600">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Menu</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Journal</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Help</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping Information</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns & Exchange</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Have a Question?</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              +2 392 3929 210
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-600">
        <p>Copyright ©2024 All rights reserved | This template is made with <span className="text-red-600">♥</span> by R&A Grocery</p>
      </div>
    </footer>
  );
};

export default Footer;
