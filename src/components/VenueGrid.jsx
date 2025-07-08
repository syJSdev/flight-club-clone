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
        <div key={venue.city} className={clsx('relative flex flex-col items-center', index === 1 ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-2')}>
          <img src={venue.img} alt={venue.city} className="w-72 h-72 md:h-48 lg:h-64 xl:h-80 md:w-full rounded object-cover shadow-md" />
          <p className="absolute bottom-0 right-0 left-0 px-2 py-1 text-sm bg-darkgreen text-white font-serif opacity-80">{venue.city}</p>
        </div>
      ))}
    </div>
  </section>
);

export default VenueGrid;
