import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMobileLocation, setOpenMobileLocation] = useState(false);
  const [subnav, setSubNav] = useState('');
  const [location, setLocation] = useState(true);
  const [country, setCountry] = useState('usa');

  return (
    <header className="w-full bg-black text-white px-8 py-3 flex items-center justify-between font-sans">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black">
        <div className="relative z-20 max-w-lg mx-auto w-full lg:max-w-xl flex items-center">
          <div className="px-4 py-3 hidden lg:flex">
            <a className="block" href="#">
              <img src="https://www.flightclubdartsusa.com/img/logo-white.png" className="block h-8" />
            </a>
          </div>
          <div className="hidden lg:flex gap-4 ml-auto py-3 text-white justify-between w-full">
            <div className="flex items-center justify-center">
              <div className="mx-2 px-4">
                <a
                  className="flex items-center font-serif capitalize text-1125 text-white hover:text-red transition-all group"
                  href="#"
                  onMouseEnter={() => {
                    setLocation(true);
                    setSubNav('');
                  }}
                >
                  <span className="flex-shrink-0">locations &nbsp;</span>
                  <span className="inline-block align-middle relative w-4 h-4">
                    <span className="block absolute right-1/2 top-1/2 w-2 h-[2px] bg-white rounded-full origin-right transition-all rotate-45 group-hover:-rotate-45 group-hover:-translate-y-1"></span>
                    <span className="block absolute left-1/2 top-1/2 w-2 h-[2px] bg-white rounded-full origin-left transition-all -rotate-45 group-hover:rotate-45 group-hover:-translate-y-1"></span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="text-center uppercase text-sm hover:text-red transition-all">
                <a
                  className="cursor-pointer"
                  href="#"
                  onMouseEnter={() => {
                    setLocation(false);
                    setSubNav('brunch');
                  }}
                >
                  Brunch
                </a>
              </div>
              <div className="text-center uppercase text-sm hover:text-red transition-all">
                <a
                  className="cursor-pointer"
                  href="#"
                  onMouseEnter={() => {
                    setLocation(false);
                    setSubNav('events');
                  }}
                >
                  Events &amp; Parties
                </a>
              </div>
              <div className="text-center uppercase text-sm hover:text-red transition-all">
                <a
                  className="cursor-pointer"
                  href="#"
                  onMouseEnter={() => {
                    setLocation(false);
                    setSubNav('menu');
                  }}
                >
                  Menus
                </a>
              </div>
              <div
                className="text-center uppercase text-sm hover:text-red transition-all"
                onMouseEnter={() => {
                  setLocation(false);
                  setSubNav('our-experiences');
                }}
              >
                <a className="cursor-pointer" href="#">
                  Happenings
                </a>
              </div>
              <div className="flex gap-[16px] px-[16px]">
                <div className="uppercase text-sm hover:text-red transition-all lg:leading-3">
                  <button
                    className="text-center flex flex-col gap-1 items-center pt-2 px-4 pb-1 bg-white font-semibold text-black uppercase hover:bg-red hover:text-white transition-all"
                    type="button"
                  >
                    <span>Book now</span>
                    <span className="text-button">2-12 Guests</span>
                  </button>
                </div>
                <div className="uppercase text-sm hover:text-red transition-all lg:leading-3">
                  <button
                    className="text-center flex flex-col gap-1 items-center px-4 pt-2 pb-1 bg-green font-semibold text-white uppercase hover:bg-red hover:text-greebg-green transition-all"
                    type="button"
                  >
                    <span>Plan an event</span>
                    <span className="text-button">13+ Guests</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="navMobileActions" className="lg:hidden w-full flex justify-between py-2">
            <div className="flex items-center lg:ml-auto px-4">
              <button
                type="button"
                className="ml-auto pointer-events-auto text-white hover:text-red transition-all"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? (
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line
                      x1="5.79676"
                      y1="34.0815"
                      x2="34.081"
                      y2="5.79719"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></line>
                    <line
                      x1="6.91808"
                      y1="6.79719"
                      x2="35.2024"
                      y2="35.0815"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></line>
                  </svg>
                ) : (
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="7.5" x2="40" y2="7.5" stroke="currentColor" strokeWidth="3"></line>
                    <line y1="19.5" x2="40" y2="19.5" stroke="currentColor" strokeWidth="3"></line>
                    <line y1="31.5" x2="40" y2="31.5" stroke="currentColor" strokeWidth="3"></line>
                  </svg>
                )}
              </button>
            </div>
            <div className="px-4 uppercase text-sm hover:text-red transition-all flex gap-4">
              <button
                className="block px-4 pt-2 pb-1 bg-white font-semibold text-black uppercase hover:bg-red hover:text-white transition-all"
                type="button"
              >
                Book 2-12 Guests
              </button>
              <button
                className="block px-4 pt-2 pb-1 bg-white font-semibold text-black uppercase hover:bg-red hover:text-white transition-all"
                type="button"
              >
                Book 13+ guests
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {!!subnav && (
            <motion.div
              className="absolute top-full left-0 right-0 z-10 bg-black"
              initial={{ opacity: 0, translateY: '-0.5rem' }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-0.5rem' }}
              transition={{
                duration: 0.2,
                ease: 'easeIn',
              }}
              onMouseLeave={(e) => {
                setLocation(false);
                setSubNav('');
              }}
            >
              <div className="max-w-lg mx-auto w-full lg:max-w-xl flex flex-row justify-center">
                <div className="text-white pt-4 pb-8">
                  <div className="flex items-center">
                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/atlanta/atlanta/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Atlanta
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/boston/seaport/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Boston
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/chicago/wacker/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Chicago
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/washington/dc/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        D.C.
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/denver/denver/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Denver
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/houston/regent-square/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Houston
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/las-vegas/the-strip/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Las Vegas
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/philadelphia/philadelphia/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        Philadelphia
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/st-louis/st-louis/' + subnav}
                        className="font-serif text-lg hover:text-red transition-all"
                      >
                        St. Louis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {!!location && (
            <motion.div
              className="absolute top-full left-0 right-0 z-10 bg-black"
              initial={{ opacity: 0, translateY: '-1.5rem' }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-1.5rem' }}
              transition={{
                duration: 0.3,
                ease: 'easeIn',
              }}
              onMouseLeave={(e) => {
                setLocation(false);
                setSubNav('');
              }}
            >
              <div className="max-w-lg mx-auto w-full lg:max-w-xl flex items-center py-8">
                <div className="flex pl-[8.5rem]">
                  {country === 'usa' && (
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                      <div className="relative px-4">
                        <a
                          href="/atlanta/atlanta"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Atlanta
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/boston/seaport"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Boston
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/chicago/wacker"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Chicago
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/washington/dc"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          D.C.
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/denver/denver"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Denver
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/houston/regent-square"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Houston
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/las-vegas/the-strip"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Las Vegas
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/philadelphia/philadelphia"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Philadelphia
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/st-louis/st-louis"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          St. Louis
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/cincinnati/cincinnati"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Cincinnati
                        </a>
                        <div className="absolute bottom-0 right-4 italic text-white translate-y-3 text-[.75rem] opacity-50">
                          Coming soon...
                        </div>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/dallas/addison"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Dallas-Addison
                        </a>
                        <div className="absolute bottom-0 right-4 italic text-white translate-y-3 text-[.75rem] opacity-50">
                          Coming soon...
                        </div>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/new-york-city/new-york-city"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          New York City
                        </a>
                        <div className="absolute bottom-0 right-4 italic text-white translate-y-3 text-[.75rem] opacity-50">
                          Coming soon...
                        </div>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/seattle/seattle"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Seattle
                        </a>
                        <div className="absolute bottom-0 right-4 italic text-white translate-y-3 text-[.75rem] opacity-50">
                          Coming soon...
                        </div>
                      </div>
                    </div>
                  )}
                  {country === 'uk' && (
                    <div className="grid grid-rows-4 grid-flow-col gap-4">
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-bloomsbury"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Bloomsbury, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-islington"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Islington, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-shoreditch"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Shoreditch, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-victoria"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Victoria, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-temple-street"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Temple St, Birmingham
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-bristol"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Corn St, Bristol
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-cardiff"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          St Mary's St, Cardiff
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-cheltenham"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Brewery Qtr, Cheltenham
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-leeds"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Park Row, Leeds
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-king-street"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          King St, Manchester
                        </a>
                      </div>
                    </div>
                  )}
                  {country === 'australia' && (
                    <div className="grid grid-rows-4 grid-flow-col gap-4">
                      <div className="px-4">
                        <a
                          href="https://flightclubdarts.com.au/location-fremantle"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          South Parade, Fremantle
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          href="https://flightclubdarts.com.au/location-perth"
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          Murray St, Perth
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="text-white pl-16 ml-16 w-64 border-l border-white">
                    {country !== 'usa' && (
                      <div className="px-4 mb-4">
                        <button
                          onClick={() => setCountry('usa')}
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          FC USA
                        </button>
                      </div>
                    )}
                    {country !== 'uk' && (
                      <div className="px-4 mb-4">
                        <button
                          onClick={() => setCountry('uk')}
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          FC UK
                        </button>
                      </div>
                    )}
                    {country !== 'australia' && (
                      <div className="px-4 mb-4">
                        <button
                          onClick={() => setCountry('australia')}
                          className="font-serif text-lg text-white hover:text-red transition-all"
                        >
                          FC Australia
                        </button>
                      </div>
                    )}
                    <div className="px-4">
                      <a
                        target="_blank"
                        href="https://flightclubdarts.com/"
                        className="font-serif text-lg text-white hover:text-red transition-all"
                      >
                        See all Locations
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {!!open && (
            <motion.div className="flex flex-col lg:hidden items-center justify-center fixed inset-0 z-10 bg-black pointer-events-auto overflow-hidden">
              <div className="px-4 py-3 flex lg:hidden">
                <a className="block" href="#">
                  <img src="/img/fc-logo-white.svg" className="block h-8" />
                </a>
              </div>
              {!openMobileLocation && (
                <div className="w-full max-w-screen-xl mx-auto px-4 text-white">
                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <a className="cursor-pointer" href="#" onClick={() => setOpenMobileLocation((prev) => !prev)}>
                      Locations
                    </a>
                  </div>

                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <a className="cursor-pointer" href="#">
                      Brunch
                    </a>
                  </div>
                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <a className="cursor-pointer" href="#">
                      Events &amp; Parties
                    </a>
                  </div>
                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <a className="cursor-pointer" href="#">
                      Menus
                    </a>
                  </div>

                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <a className="cursor-pointer" href="#">
                      Happenings
                    </a>
                  </div>

                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <button
                      className="btn-base bg-red font-semibold text-white hover:bg-white hover:text-red transition-all"
                      type="button"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              )}
              {!!openMobileLocation && (
                <div className="w-full max-w-screen-xl mx-auto px-4 py-24 text-white">
                  <div className="py-4 uppercase text-center hover:text-red transition-all">
                    <button onClick={() => setOpenMobileLocation(false)}>&lt; Back</button>
                  </div>
                  <div className="flex flex-col mt-4">
                    {country === 'usa' && (
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/atlanta/atlanta" className="text-white hover:text-red transition-all">
                            Atlanta
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/boston/seaport" className="text-white hover:text-red transition-all">
                            Boston
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/chicago/wacker" className="text-white hover:text-red transition-all">
                            Chicago
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/washington/dc" className="text-white hover:text-red transition-all">
                            D.C.
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/denver/denver" className="text-white hover:text-red transition-all">
                            Denver
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/houston/regent-square" className="text-white hover:text-red transition-all">
                            Houston
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/las-vegas/the-strip" className="text-white hover:text-red transition-all">
                            Las Vegas
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/philadelphia/philadelphia" className="text-white hover:text-red transition-all">
                            Philadelphia
                          </a>
                        </div>

                        <div className="relative px-4 flex items-center justify-center">
                          <a href="/st-louis/st-louis" className="text-white hover:text-red transition-all">
                            St. Louis
                          </a>
                        </div>

                        <div className="relative px-4">
                          <a href="/cincinnati/cincinnati" className="text-white hover:text-red transition-all">
                            Cincinnati
                          </a>
                          <div className="italic text-white text-[.75rem] opacity-50">Coming soon...</div>
                        </div>

                        <div className="relative px-4">
                          <a href="/dallas/addison" className="text-white hover:text-red transition-all">
                            Dallas-Addison
                          </a>
                          <div className="italic text-white text-[.75rem] opacity-50">Coming soon...</div>
                        </div>

                        <div className="relative px-4">
                          <a href="/new-york-city/new-york-city" className="text-white hover:text-red transition-all">
                            New York City
                          </a>
                          <div className="italic text-white text-[.75rem] opacity-50">Coming soon...</div>
                        </div>

                        <div className="relative px-4">
                          <a href="/seattle/seattle" className="text-white hover:text-red transition-all">
                            Seattle
                          </a>
                          <div className="italic text-white text-[.75rem] opacity-50">Coming soon...</div>
                        </div>
                      </div>
                    )}
                    {country === 'uk' && (
                      <div className="grid grid-rows-1 gap-4 text-center">
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-bloomsbury"
                            className=" text-white hover:text-red transition-all"
                          >
                            Bloomsbury, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-islington"
                            className=" text-white hover:text-red transition-all"
                          >
                            Islington, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-shoreditch"
                            className=" text-white hover:text-red transition-all"
                          >
                            Shoreditch, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-victoria"
                            className=" text-white hover:text-red transition-all"
                          >
                            Victoria, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-temple-street"
                            className=" text-white hover:text-red transition-all"
                          >
                            Temple St, Birmingham
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-bristol"
                            className=" text-white hover:text-red transition-all"
                          >
                            Corn St, Bristol
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-cardiff"
                            className=" text-white hover:text-red transition-all"
                          >
                            St Mary's St, Cardiff
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-cheltenham"
                            className=" text-white hover:text-red transition-all"
                          >
                            Brewery Qtr, Cheltenham
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-leeds"
                            className=" text-white hover:text-red transition-all"
                          >
                            Park Row, Leeds
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-king-street"
                            className=" text-white hover:text-red transition-all"
                          >
                            King St, Manchester
                          </a>
                        </div>
                      </div>
                    )}
                    {country === 'australia' && (
                      <div className="grid grid-rows-1 gap-4 text-center">
                        <div className="px-4">
                          <a
                            href="https://flightclubdarts.com.au/location-fremantle"
                            className=" text-white hover:text-red transition-all"
                          >
                            South Parade, Fremantle
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            href="https://flightclubdarts.com.au/location-perth"
                            className=" text-white hover:text-red transition-all"
                          >
                            Murray St, Perth
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="text-white pt-8 mt-8 text-center border-t border-white">
                      {country !== 'usa' && (
                        <div className="px-4 mb-4">
                          <button
                            onClick={() => setCountry('usa')}
                            className=" text-white hover:text-red transition-all"
                          >
                            FC USA
                          </button>
                        </div>
                      )}
                      {country !== 'uk' && (
                        <div className="px-4 mb-4">
                          <button
                            onClick={() => setCountry('uk')}
                            className=" text-white hover:text-red transition-all"
                          >
                            FC UK
                          </button>
                        </div>
                      )}
                      {country !== 'australia' && (
                        <div className="px-4 mb-4">
                          <button
                            onClick={() => setCountry('australia')}
                            className=" text-white hover:text-red transition-all"
                          >
                            FC Australia
                          </button>
                        </div>
                      )}
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/"
                          className=" text-white hover:text-red transition-all"
                        >
                          All Locations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
