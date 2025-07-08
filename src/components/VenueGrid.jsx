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
  <section className="bg-white py-8 px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {venues.map((venue) => (
        <div key={venue.city} className="flex flex-col items-center">
          <img src={venue.img} alt={venue.city} className="w-full h-48 object-cover rounded shadow-md" />
          <span className="mt-2 text-sm italic text-gray-700">{venue.city}</span>
        </div>
      ))}
    </div>
  </section>
);

export default VenueGrid;
