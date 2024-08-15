import React from "react";
import Project1 from "../public/assets/project-1.png";
import Project2 from "../public/assets/project.png";
import Project3 from "../public/assets/projecr-3.png";
import Image from "next/image";

function Project() {
  return (
    <div className="flex flex-col items-center bg-white justify-center w-screen min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold"> My Projects</h1>
        <p className="w-[700px] text-center mt-10 ">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-5 py-2 rounded-md border border-gray-300">
            All
          </button>
          <button className="px-5 py-2 rounded-md border border-gray-300">
            UI/UX
          </button>
          <button className="px-5 py-2 bg-primary text-black rounded-md">
            Web Design
          </button>
          <button className="px-5 py-2 rounded-md border border-gray-300">
            App Design
          </button>
          <button className="px-5 py-2 rounded-md border border-gray-300">
            Graphic Design
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        <div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <Image src={Project1} width={250} height={350} alt="Project 1" />
          </div>
          <div>
            <h4 className="text-primary mt-4">Web Design</h4>
            <h3 className="font-semibold text-black">
              AirCalling Landing Page Design
            </h3>
          </div>
        </div>
        <div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <Image src={Project2} width={250} height={350} alt="Project 1" />
          </div>
          <div>
            <h4 className="text-primary mt-4">Web Design</h4>
            <h3 className="font-semibold text-black">
              Business Landing Page Design
            </h3>
          </div>
        </div>
        <div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <Image src={Project3} width={250} height={350} alt="Project 1" />
          </div>
          <div>
            <h4 className="text-primary mt-4">Web Design</h4>
            <h3 className="font-semibold text-black">
              Ecom Web Page Design
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
