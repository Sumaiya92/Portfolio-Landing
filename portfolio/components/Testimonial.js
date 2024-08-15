import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active index

  const testimonials = [
 
    {
      name: 'Jane Smith',
      message: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan',
      role: 'CTO',
      image: '../assets/test-2.png', // Use correct path
    },
    
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.',
      role: 'CEO',
      image: '../assets/test-2.png', // Use correct path
    },
    
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan..',
      role: 'CEO',
      image: '../assets/test-1.png', // Use correct path
    },
    {
      name: ' Name',
      message: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.',
      role: 'CEO',
      image: '../assets/test-2.png', // Use correct path
    },
    {
      name: 'Emily Davis',
      message: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      role: 'Designer',
      image: '../assets/test-1.png', // Use correct path
    },
    {
      name: 'Emily Davis',
      message: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      role: 'Designer',
      image: '../assets/test-1.png', // Use correct path
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (_current, next) => setActiveIndex(next), // Update active index before change
    customPaging: i => (
      <div className={`flex w-full ${activeIndex === i ? 'text-primary' : 'bg-gray-300'}`}>
        <div className={`w-[8%] px-5 h-2 rounded-md ${activeIndex === i ? 'bg-primary' : 'bg-gray-300'}`}></div>
      </div>
    ),
    appendDots: dots => (
      <div className="flex justify-center w-full mt-5">
        <ul className="flex justify-center mt-10 space-x-6">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="py-10 bg-white">
      <div className='flex flex-col justify-center items-center mb-5'>
      <h1 className=" text-5xl font-bold ">Testimonials</h1>
      <p className="max-w-[932px] text-lg leading-8 text-center tracking-wider text-black font-poppins mt-5">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="">
            <div className="p-5 flex w-full max-w-md mx-auto mb-[2%] rounded-xl shadow-lg bg-white">
              <div className="flex-shrink-0">
                <img
                  className="w-24 h-24 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <div className="ml-6">
                <p className="italic text-gray-700">"{testimonial.message}"</p>
                <p className="font-bold mt-4 text-black">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
