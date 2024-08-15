import React from 'react';
import Image from 'next/image';
import Profile from '../public/assets/profile.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function HomeSection() {
  return (
    <><div className="flex px-48 m-14 ml-20 bg-white  ">
          <div className="flex flex-col justify-center   items-start w-1/2 space-y-2">
              <p>Hi I am</p>
              <h3 className='text-primary'>Muhammed Umair</h3>
              <h1 className='text-7xl font-bold'>UI & UX</h1>
              <h1 className='text-7xl font-bold ml-40'>Designer</h1>
              <p className=''>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.</p>
              <button className=" bg-primary text-black px-10 py-2 rounded">Hire Me</button>
          </div>

          <div className="relative w-1/2 flex justify-center">
              <Image src={Profile} width={300} height={300} alt="Profile" />
              <div className="absolute top-14  w-36 h-10 bg-orange-500 opacity-75" />
      </div>
          </div>
      <div className="flex ml-[62%] space-x-4 ">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl -mt-6">
                  <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl -mt-6">
                  <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl -mt-6">
                  <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black text-2xl -mt-6">
                  <FaLinkedin />
              </a>
          </div></>
  );
}

export default HomeSection;
