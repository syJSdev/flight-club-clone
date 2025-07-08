import React from 'react';
import chicagoImg from '../assets/images/chicago_img_7443.webp';
import atlantaImg from '../assets/images/atlanta_star-metals-8.webp';
import houstonImg from '../assets/images/boston_flight-club-boston.webp';
import clsx from 'classnames';

const venues = [
  {
    city: 'Chicago, IL',
    img: chicagoImg,
  },
  {
    city: 'Atlanta, GA',
    img: atlantaImg,
  },
  {
    city: 'Houston, MA',
    img: houstonImg,
  },
];

const VenueGrid = () => (
  <section className="bg-white px-4 py-8">
    <div className="mx-auto grid max-w-xl grid-cols-1 gap-2 md:grid-cols-7">
      {venues.map((venue, index) => (
        <div
          key={venue.city}
          className={clsx(
            'relative flex flex-col items-center',
            index === 1 ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-2'
          )}
        >
          <img
            src={venue.img}
            alt={venue.city}
            className="h-72 w-72 rounded object-cover shadow-md md:h-48 md:w-full lg:h-64 xl:h-80"
          />
          <p className="bg-darkgreen absolute right-0 bottom-0 left-0 px-2 py-1 font-serif text-sm text-white opacity-80">
            {venue.city}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default VenueGrid;
