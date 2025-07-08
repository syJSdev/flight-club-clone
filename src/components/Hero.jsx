import React from 'react';
import heroImg from '../assets/images/top-image.jpg';
import CityDropdown from './CityDropdown';

const Hero = () => (
  <section className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Flight Club Venue"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
    />
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-opacity-30">
      <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-4 uppercase font-sans">Select Your Venue</h2>
      <CityDropdown />
    </div>
  </section>
);

export default Hero; 