import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import VenueGrid from './components/VenueGrid';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        <Hero />
        <Welcome />
        <VenueGrid />
      </main>
    </div>
  );
}

export default App;
