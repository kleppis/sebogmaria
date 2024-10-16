import React, { useEffect, useState } from "react";

// Nedtellingskomponent
const Countdown = () => {
  const weddingDate = new Date("2025-07-26T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(weddingDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Bryllupet vårt!</h1>
      <p className="text-2xl font-medium mb-4">26. Juli 2025</p>
      <p className="text-4xl font-bold">{formatTime(timeLeft)}</p>
    </div>
  );
};

// Hovedkomponent med plass til bilder
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">Velkommen til vårt bryllup!</h1>
      </header>
      <main className="p-6">
        <Countdown />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Eksempelbilder */}
          <img src="bilde1.jpg" alt="Bryllupsbilde 1" className="rounded-lg shadow-lg" />
          <img src="bilde2.jpg" alt="Bryllupsbilde 2" className="rounded-lg shadow-lg" />
          <img src="bilde3.jpg" alt="Bryllupsbilde 3" className="rounded-lg shadow-lg" />
        </div>
      </main>
    </div>
  );
};

export default Home;