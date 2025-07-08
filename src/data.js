// Simple in-memory cache for venues data
let cachedVenues = null;

export async function getVenues() {
  if (cachedVenues) return cachedVenues;
  const response = await fetch('https://www.flightclubdartsusa.com/api/collections/venues/entries');
  const json = await response.json();
  console.log(json);
  cachedVenues = json.data;
  return cachedVenues;
} 