import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMobileLocation, setOpenMobileLocation] = useState(false);
  const [subnav, setSubNav] = useState('');
  const [location, setLocation] = useState(true);
  const [country, setCountry] = useState('usa');

  return (
    <header className="fixed top-0 right-0 left-0 z-40 bg-black font-sans text-white">
      <nav className="flex w-full items-center justify-between">
        <div className="relative z-20 mx-auto flex w-full max-w-lg items-center lg:max-w-xl">
          <div className="hidden px-4 py-3 lg:flex">
            <a className="block" href="#">
              <img src="https://www.flightclubdartsusa.com/img/logo-white.png" className="block h-8" />
            </a>
          </div>
          <div className="ml-auto hidden w-full justify-between gap-4 py-3 text-white lg:flex">
            <div className="flex items-center justify-center">
              <div className="mx-2 px-4">
                <a
                  className="text-1125 hover:text-red group flex items-center font-serif text-white capitalize transition-all"
                  href="#"
                  onMouseEnter={() => {
                    setLocation(true);
                    setSubNav('');
                  }}
                >
                  <span className="flex-shrink-0">locations &nbsp;</span>
                  <span className="relative inline-block h-4 w-4 align-middle">
                    <span className="absolute top-1/2 right-1/2 block h-[2px] w-2 origin-right rotate-45 rounded-full bg-white transition-all group-hover:-translate-y-1 group-hover:-rotate-45"></span>
                    <span className="absolute top-1/2 left-1/2 block h-[2px] w-2 origin-left -rotate-45 rounded-full bg-white transition-all group-hover:-translate-y-1 group-hover:rotate-45"></span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hover:text-red text-center text-sm uppercase transition-all">
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
              <div className="hover:text-red text-center text-sm uppercase transition-all">
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
              <div className="hover:text-red text-center text-sm uppercase transition-all">
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
                className="hover:text-red text-center text-sm uppercase transition-all"
                onMouseEnter={() => {
                  setLocation(false);
                  setSubNav('our-experiences');
                }}
              >
                <a className="cursor-pointer" href="#">
                  Happenings
                </a>
              </div>
              <div className="flex gap-4 px-4">
                <div className="hover:text-red text-sm uppercase transition-all lg:leading-3">
                  <button
                    className="hover:bg-red flex flex-col items-center gap-1 bg-white px-4 pt-2 pb-1 text-center font-semibold text-black uppercase transition-all hover:text-white"
                    type="button"
                  >
                    <span>Book now</span>
                    <span className="text-button">2-12 Guests</span>
                  </button>
                </div>
                <div className="hover:text-red text-sm uppercase transition-all lg:leading-3">
                  <button
                    className="bg-green hover:bg-red hover:text-greebg-green flex flex-col items-center gap-1 px-4 pt-2 pb-1 text-center font-semibold text-white uppercase transition-all"
                    type="button"
                  >
                    <span>Plan an event</span>
                    <span className="text-button">13+ Guests</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="navMobileActions" className="flex w-full justify-between py-2 lg:hidden">
            <div className="flex items-center px-4 lg:ml-auto">
              <button
                type="button"
                className="hover:text-red pointer-events-auto ml-auto text-white transition-all"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? (
                  <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="7.5" x2="40" y2="7.5" stroke="currentColor" strokeWidth="3"></line>
                    <line y1="19.5" x2="40" y2="19.5" stroke="currentColor" strokeWidth="3"></line>
                    <line y1="31.5" x2="40" y2="31.5" stroke="currentColor" strokeWidth="3"></line>
                  </svg>
                )}
              </button>
            </div>
            <div className="hover:text-red flex gap-4 px-4 text-sm uppercase transition-all">
              <button
                className="hover:bg-red block bg-white px-4 pt-2 pb-1 font-semibold text-black uppercase transition-all hover:text-white"
                type="button"
              >
                Book 2-12 Guests
              </button>
              <button
                className="hover:bg-red block bg-white px-4 pt-2 pb-1 font-semibold text-black uppercase transition-all hover:text-white"
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
              className="absolute top-full right-0 left-0 z-10 bg-black"
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
              <div className="mx-auto flex w-full max-w-lg flex-row justify-center lg:max-w-xl">
                <div className="pt-4 pb-8 text-white">
                  <div className="flex items-center">
                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/atlanta/atlanta/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Atlanta
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/boston/seaport/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Boston
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/chicago/wacker/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Chicago
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/washington/dc/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        D.C.
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/denver/denver/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Denver
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/houston/regent-square/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Houston
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/las-vegas/the-strip/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Las Vegas
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/philadelphia/philadelphia/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
                      >
                        Philadelphia
                      </a>
                    </div>

                    <div className="px-4">
                      <a
                        target="_blank"
                        href={'/st-louis/st-louis/' + subnav}
                        className="hover:text-red font-serif text-lg transition-all"
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
              className="absolute top-full right-0 left-0 z-10 bg-black"
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
              <div className="mx-auto flex w-full max-w-lg items-center py-8 lg:max-w-xl">
                <div className="flex pl-[8.5rem]">
                  {country === 'usa' && (
                    <div className="grid grid-flow-col grid-rows-3 gap-4">
                      <div className="relative px-4">
                        <a
                          href="/atlanta/atlanta"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Atlanta
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/boston/seaport"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Boston
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/chicago/wacker"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Chicago
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/washington/dc"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          D.C.
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/denver/denver"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Denver
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/houston/regent-square"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Houston
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/las-vegas/the-strip"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Las Vegas
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/philadelphia/philadelphia"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Philadelphia
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/st-louis/st-louis"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          St. Louis
                        </a>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/cincinnati/cincinnati"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Cincinnati
                        </a>
                        <div className="absolute right-4 bottom-0 translate-y-3 text-[.75rem] text-white italic opacity-50">
                          Coming soon...
                        </div>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/dallas/addison"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Dallas-Addison
                        </a>
                        <div className="absolute right-4 bottom-0 translate-y-3 text-[.75rem] text-white italic opacity-50">
                          Coming soon...
                        </div>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/new-york-city/new-york-city"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          New York City
                        </a>
                        <div className="absolute right-4 bottom-0 translate-y-3 text-[.75rem] text-white italic opacity-50">
                          Coming soon...
                        </div>
                      </div>

                      <div className="relative px-4">
                        <a
                          href="/seattle/seattle"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Seattle
                        </a>
                        <div className="absolute right-4 bottom-0 translate-y-3 text-[.75rem] text-white italic opacity-50">
                          Coming soon...
                        </div>
                      </div>
                    </div>
                  )}
                  {country === 'uk' && (
                    <div className="grid grid-flow-col grid-rows-4 gap-4">
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-bloomsbury"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Bloomsbury, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-islington"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Islington, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-shoreditch"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Shoreditch, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-victoria"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Victoria, London
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-temple-street"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Temple St, Birmingham
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-bristol"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Corn St, Bristol
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-cardiff"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          St Mary's St, Cardiff
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-cheltenham"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Brewery Qtr, Cheltenham
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-leeds"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Park Row, Leeds
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/location-king-street"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          King St, Manchester
                        </a>
                      </div>
                    </div>
                  )}
                  {country === 'australia' && (
                    <div className="grid grid-flow-col grid-rows-4 gap-4">
                      <div className="px-4">
                        <a
                          href="https://flightclubdarts.com.au/location-fremantle"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          South Parade, Fremantle
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          href="https://flightclubdarts.com.au/location-perth"
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          Murray St, Perth
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="ml-16 w-64 border-l border-white pl-16 text-white">
                    {country !== 'usa' && (
                      <div className="mb-4 px-4">
                        <button
                          onClick={() => setCountry('usa')}
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          FC USA
                        </button>
                      </div>
                    )}
                    {country !== 'uk' && (
                      <div className="mb-4 px-4">
                        <button
                          onClick={() => setCountry('uk')}
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          FC UK
                        </button>
                      </div>
                    )}
                    {country !== 'australia' && (
                      <div className="mb-4 px-4">
                        <button
                          onClick={() => setCountry('australia')}
                          className="hover:text-red font-serif text-lg text-white transition-all"
                        >
                          FC Australia
                        </button>
                      </div>
                    )}
                    <div className="px-4">
                      <a
                        target="_blank"
                        href="https://flightclubdarts.com/"
                        className="hover:text-red font-serif text-lg text-white transition-all"
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
            <motion.div className="pointer-events-auto fixed inset-0 z-10 flex flex-col items-center justify-center overflow-hidden bg-black lg:hidden">
              <div className="flex px-4 py-3 lg:hidden">
                <a className="block" href="#">
                  <img src="/img/fc-logo-white.svg" className="block h-8" />
                </a>
              </div>
              {!openMobileLocation && (
                <div className="mx-auto w-full max-w-screen-xl px-4 text-white">
                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <a className="cursor-pointer" href="#" onClick={() => setOpenMobileLocation((prev) => !prev)}>
                      Locations
                    </a>
                  </div>

                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <a className="cursor-pointer" href="#">
                      Brunch
                    </a>
                  </div>
                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <a className="cursor-pointer" href="#">
                      Events &amp; Parties
                    </a>
                  </div>
                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <a className="cursor-pointer" href="#">
                      Menus
                    </a>
                  </div>

                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <a className="cursor-pointer" href="#">
                      Happenings
                    </a>
                  </div>

                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <button
                      className="btn-base bg-red hover:text-red font-semibold text-white transition-all hover:bg-white"
                      type="button"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              )}
              {!!openMobileLocation && (
                <div className="mx-auto w-full max-w-screen-xl px-4 py-24 text-white">
                  <div className="hover:text-red py-4 text-center uppercase transition-all">
                    <button onClick={() => setOpenMobileLocation(false)}>&lt; Back</button>
                  </div>
                  <div className="mt-4 flex flex-col">
                    {country === 'usa' && (
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="relative flex items-center justify-center px-4">
                          <a href="/atlanta/atlanta" className="hover:text-red text-white transition-all">
                            Atlanta
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/boston/seaport" className="hover:text-red text-white transition-all">
                            Boston
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/chicago/wacker" className="hover:text-red text-white transition-all">
                            Chicago
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/washington/dc" className="hover:text-red text-white transition-all">
                            D.C.
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/denver/denver" className="hover:text-red text-white transition-all">
                            Denver
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/houston/regent-square" className="hover:text-red text-white transition-all">
                            Houston
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/las-vegas/the-strip" className="hover:text-red text-white transition-all">
                            Las Vegas
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/philadelphia/philadelphia" className="hover:text-red text-white transition-all">
                            Philadelphia
                          </a>
                        </div>

                        <div className="relative flex items-center justify-center px-4">
                          <a href="/st-louis/st-louis" className="hover:text-red text-white transition-all">
                            St. Louis
                          </a>
                        </div>

                        <div className="relative px-4">
                          <a href="/cincinnati/cincinnati" className="hover:text-red text-white transition-all">
                            Cincinnati
                          </a>
                          <div className="text-[.75rem] text-white italic opacity-50">Coming soon...</div>
                        </div>

                        <div className="relative px-4">
                          <a href="/dallas/addison" className="hover:text-red text-white transition-all">
                            Dallas-Addison
                          </a>
                          <div className="text-[.75rem] text-white italic opacity-50">Coming soon...</div>
                        </div>

                        <div className="relative px-4">
                          <a href="/new-york-city/new-york-city" className="hover:text-red text-white transition-all">
                            New York City
                          </a>
                          <div className="text-[.75rem] text-white italic opacity-50">Coming soon...</div>
                        </div>

                        <div className="relative px-4">
                          <a href="/seattle/seattle" className="hover:text-red text-white transition-all">
                            Seattle
                          </a>
                          <div className="text-[.75rem] text-white italic opacity-50">Coming soon...</div>
                        </div>
                      </div>
                    )}
                    {country === 'uk' && (
                      <div className="grid grid-rows-1 gap-4 text-center">
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-bloomsbury"
                            className="hover:text-red text-white transition-all"
                          >
                            Bloomsbury, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-islington"
                            className="hover:text-red text-white transition-all"
                          >
                            Islington, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-shoreditch"
                            className="hover:text-red text-white transition-all"
                          >
                            Shoreditch, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-victoria"
                            className="hover:text-red text-white transition-all"
                          >
                            Victoria, London
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-temple-street"
                            className="hover:text-red text-white transition-all"
                          >
                            Temple St, Birmingham
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-bristol"
                            className="hover:text-red text-white transition-all"
                          >
                            Corn St, Bristol
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-cardiff"
                            className="hover:text-red text-white transition-all"
                          >
                            St Mary's St, Cardiff
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-cheltenham"
                            className="hover:text-red text-white transition-all"
                          >
                            Brewery Qtr, Cheltenham
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-leeds"
                            className="hover:text-red text-white transition-all"
                          >
                            Park Row, Leeds
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            target="_blank"
                            href="https://flightclubdarts.com/location-king-street"
                            className="hover:text-red text-white transition-all"
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
                            className="hover:text-red text-white transition-all"
                          >
                            South Parade, Fremantle
                          </a>
                        </div>
                        <div className="px-4">
                          <a
                            href="https://flightclubdarts.com.au/location-perth"
                            className="hover:text-red text-white transition-all"
                          >
                            Murray St, Perth
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="mt-8 border-t border-white pt-8 text-center text-white">
                      {country !== 'usa' && (
                        <div className="mb-4 px-4">
                          <button
                            onClick={() => setCountry('usa')}
                            className="hover:text-red text-white transition-all"
                          >
                            FC USA
                          </button>
                        </div>
                      )}
                      {country !== 'uk' && (
                        <div className="mb-4 px-4">
                          <button onClick={() => setCountry('uk')} className="hover:text-red text-white transition-all">
                            FC UK
                          </button>
                        </div>
                      )}
                      {country !== 'australia' && (
                        <div className="mb-4 px-4">
                          <button
                            onClick={() => setCountry('australia')}
                            className="hover:text-red text-white transition-all"
                          >
                            FC Australia
                          </button>
                        </div>
                      )}
                      <div className="px-4">
                        <a
                          target="_blank"
                          href="https://flightclubdarts.com/"
                          className="hover:text-red text-white transition-all"
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
