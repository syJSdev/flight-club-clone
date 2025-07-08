import React from 'react';
import chicagoImg from '../assets/images/chicago_img_7443.webp';
import atlantaImg from '../assets/images/atlanta_star-metals-8.webp';
import houstonImg from '../assets/images/boston_flight-club-boston.webp';

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
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      {venues.map((venue) => (
        <div key={venue.city} className="flex flex-col items-center">
          <img src={venue.img} alt={venue.city} className="h-48 w-full rounded object-cover shadow-md" />
          <span className="mt-2 text-sm text-gray-700 italic">{venue.city}</span>
        </div>
      ))}
    </div>
  </section>
);

export default VenueGrid;
