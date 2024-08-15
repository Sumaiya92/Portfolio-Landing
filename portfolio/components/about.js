import React from "react";
import AboutProfile from '../public/assets/about.png';
import Image from "next/image";

function About() {
  return (
    <div className="flex min-w-screen min-h-screen mt-16 pr-44 bg-white">
      {/* Image Section - 50% */}
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="relative left-20">
          <Image src={AboutProfile} width={400} height={400} alt="Profile" />
          <div className="absolute top-14 left-28 w-40 h-10 bg-orange-500 opacity-75" />
        </div>
      </div>

      {/* Content Section - 50% */}
      <div className="w-1/2 pr-16 pt-48 text-black">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">UX</label>
            <input type="range" max={100} className="w-full accent-orange-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Website Design</label>
            <input type="range" max={100} className="w-full accent-orange-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1">App Design</label>
            <input type="range" max={100} className="w-full accent-orange-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Graphic Design</label>
            <input type="range" max={100} className="w-full accent-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
