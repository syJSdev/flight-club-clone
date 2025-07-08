import React, { useState } from 'react';
import heroImg from '../assets/images/top-image.jpg';
import CityDropdown from './CityDropdown';

const Hero = ({ children, onClickOpenLocations }) => {
  return (
    <section className="relative h-screen max-h-[48rem] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Flight Club Venue"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="mx-auto flex h-full w-full max-w-lg items-end justify-center lg:max-w-xl">
        <button
          class="font-semi-bold border-x-none border-t-none w-fit-content relative z-20 mx-auto mb-12 flex min-w-[24rem] appearance-none items-center justify-center border-b border-white bg-transparent pt-1 pr-8 pb-0 text-2xl text-white uppercase"
          onClick={onClickOpenLocations}
          data-test="homepage-mobile-prominent-venue-selector"
        >
          Select Your Venue
          <span className="absolute right-0 inline-block">
            <span className="relative inline-block h-6 w-6 align-middle">
              <span className="absolute top-1/2 right-1/2 block h-[2px] w-3 origin-right rotate-45 rounded-full bg-white transition-all"></span>
              <span className="absolute top-1/2 left-1/2 block h-[2px] w-3 origin-left -rotate-45 rounded-full bg-white transition-all"></span>
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
