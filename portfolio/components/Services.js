import React from "react";
import Service1 from "../public/assets/service-1.png";
import Service2 from "../public/assets/service-2.png";
import Service3 from "../public/assets/service-3.png";
import Service4 from "../public/assets/images.png";
import Image from "next/image";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-w-screen h-screen bg-white
    ">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black">Services</h1>
        <p className="max-w-[932px] text-lg leading-8 text-center tracking-wider text-black font-poppins mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
      </div>
      <div className="flex space-x-4 justify-center mt-8 ">
        <div className="bg-[#F8F8F8]  p-4 rounded-lg w-[15%] relative text-black">
          <div className="mt-2">
            <Image src={Service1} width={50} height={200} alt="UI/UX" />
          </div>
          <div className="mt-3">
            <h3 className="mt-1 font-semibold">UI/UX</h3>
            <p className="mt-1 text-sm text-black">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>

        <div className="bg-[#F8F8F8]  w-[15%] p-4 rounded-lg text-black">
          <div>
            <Image src={Service2} width={50} height={200} alt="Web Design" />
          </div>
          <div className="mt-3">
            <h3 className="mt-1 font-semibold">Web Design</h3>
            <p className="mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>

        <div className="bg-[#F8F8F8] w-[15%] p-4 rounded-lg text-black">
          <div>
            <Image src={Service3} width={30} height={200} alt="App Design" />
          </div>
          <div className="mt-3">
            <h3 className="mt-1 font-semibold">App Design</h3>
            <p className="mt-1 text-sm text-black">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>

        <div className="bg-[#F8F8F8] w-[15%] p-4 rounded-lg text-black">
          <div>
            <Image src={Service4} width={50} height={200} alt="Graphic Design" />
          </div>
          <div className="mt-3">
            <h3 className="mt-1 font-semibold">Graphic Design</h3>
            <p className="mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
