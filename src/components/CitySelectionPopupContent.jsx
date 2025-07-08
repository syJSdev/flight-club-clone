import React, { useEffect, useState } from 'react';
import { getVenues } from '../data';

const CitySelectionPopupContent = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVenues()
      .then(setVenues)
      .catch(() => setError('Failed to load venues'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-6 pt-2 pb-6">
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="flex flex-col gap-4">
        {venues &&
          venues.map((venue) => (
            <a
              key={venue.id}
              className="rounded-md border border-black px-4 py-3 text-center text-base font-semibold tracking-widest uppercase transition-colors hover:bg-black hover:text-white"
              href={`https://www.flightclubdartsusa.com${venue.uri}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {venue.title}
            </a>
          ))}
      </div>
    </div>
  );
};

export default CitySelectionPopupContent;
