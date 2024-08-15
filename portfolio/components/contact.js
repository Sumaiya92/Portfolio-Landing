import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 mt-20 ">
      <div className="text-center mb-4">
        <h2 className="text-5xl font-bold ">Lets Design Together</h2>
        <div class="w-[66%] h-[101px] left-0 top-[113px] 
            font-poppins font-normal text-[21px] leading-[32px] 
            text-center tracking-[0.03em] ml-[15%] text-black mt-10">
    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
    Aliquet donec morbi convallis pretium.
</div>
      </div>
      <div className="flex items-center space-x-5 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-2xl pr-60 p-4  py-4 mb-2 w-full max-w-md bg-[#F8F8F8]"
        />
        <button className="bg-primary text-black p-5 px-8 py-4 rounded-2xl hover:bg-primary-dark transition">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Contact;
