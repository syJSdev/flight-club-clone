import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import VenueGrid from './components/VenueGrid';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-start">
        <Hero />
        <Welcome />
        <VenueGrid />
      </main>
    </div>
  );
}

export default App;
