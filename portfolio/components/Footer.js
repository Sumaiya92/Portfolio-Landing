import React from 'react';
import logo from "../public/assets/logos.png";
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className=" text-black p-6 mt-28 bg-white">
      <div className="flex flex-col items-center">
        <div className="mb-14">
          <Image src={logo} width={150} height={150} alt="Logo" />
        </div>
        <nav className="mb-4">
          <ul className="flex space-x-7">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Me</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Testimonials</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4 m-16">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <FaLinkedin />
          </a>
        </div>
        <div className="bg-[#545454] w-full py-3">
          <p className="text-center text-white text-md">
            &copy; 2023 <span className="text-primary">Mumair</span>. All rights reserved,Inc
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
