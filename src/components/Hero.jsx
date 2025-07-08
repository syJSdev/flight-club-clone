import React, { useState } from 'react';
import heroImg from '../assets/images/top-image.jpg';
import CitySelectionPopupContent from './CitySelectionPopupContent';
import Popup from './Popup';

const Hero = () => {
  const [openSelectionPopup, setOpenSelectionPopup] = useState(false);

  return (
    <section className="relative h-screen max-h-[32rem] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <img src={heroImg} alt="Flight Club Venue" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#000] to-transparent to-50%" />
      </div>

      <div className="mx-auto flex h-full w-full max-w-lg items-end justify-center lg:max-w-xl">
        <button
          className="font-semi-bold border-x-none border-t-none w-fit-content relative mx-auto mb-12 flex min-w-[32rem] appearance-none items-center justify-center border-b border-white bg-transparent px-8 py-2 text-2xl tracking-widest text-white uppercase"
          onClick={() => setOpenSelectionPopup(true)}
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
      {/* We can create popup component from this code */}
      {!!openSelectionPopup && (
        <Popup isOpen={openSelectionPopup} onClose={() => setOpenSelectionPopup(false)} title="Select a Location">
          <CitySelectionPopupContent />
        </Popup>
      )}
    </section>
  );
};

export default Hero;
