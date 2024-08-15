import React from "react";
import Image from "next/image";
import logo from "../public/assets/logos.png";

function Header() {
  return (
    <div className="flex items-center justify-center  ml-52 bg-white  text-black p-4">
      <div className="flex items-center space-x-10 relative">
        <div className="absolute w-full right-[13.5rem] text-black" >
          <Image src={logo} width={150} height={150} alt="Logo" />
        </div>
        <nav >
          <ul className="flex space-x-7">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-primary text-black px-5 py-2   rounded hover:bg-blue-700 transition duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Header;
