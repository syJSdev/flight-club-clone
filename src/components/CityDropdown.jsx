import React, { useEffect, useState } from 'react';

const API_URL = 'https://www.flightclubdartsusa.com/api/collections/venues/entries';

const CityDropdown = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCities(data.entries || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load cities');
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const uri = e.target.value;
    if (uri) {
      window.location.href = `https://www.flightclubdartsusa.com/${uri}`;
    }
  };

  return (
    <div className="mx-auto mt-2 flex w-full max-w-xs flex-col items-center">
      <div className="relative w-full">
        <select
          id="city"
          className="focus:ring-brand block w-full cursor-pointer appearance-none rounded-full border-none bg-white px-5 py-3 pr-10 font-sans text-base font-bold text-black shadow-lg focus:ring-2 md:text-lg"
          onChange={handleChange}
          defaultValue=""
          disabled={loading || !!error}
        >
          <option value="" disabled>
            {loading ? 'Loading cities...' : error ? error : 'Choose a city'}
          </option>
          {cities.map((city) => (
            <option key={city.title} value={city.uri}>
              {city.title}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default CityDropdown;
