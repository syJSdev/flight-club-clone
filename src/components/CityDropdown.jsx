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
    <div className="w-full max-w-xs mx-auto mt-2 flex flex-col items-center">
      <div className="relative w-full">
        <select
          id="city"
          className="block w-full px-5 py-3 pr-10 bg-white text-black border-none rounded-full shadow-lg font-sans font-bold text-base md:text-lg focus:ring-2 focus:ring-brand appearance-none cursor-pointer"
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
          className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
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
