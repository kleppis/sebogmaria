import React, { useEffect, useState } from "react";
import "./Home.css";
import "./index.css";
import Bilde1 from "./assets/bilde2.jpg";
import Bilde2 from "./assets/bilde3.jpg";



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

    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white-300 shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Maria & Sebastian</h1>
      <p className="text-2xl font-medium mb-4">26. Juli 2025</p>
      <p className="text-4xl font-bold underline">{formatTime(timeLeft)}</p>
    </div>
  );
};

// Hovedkomponent med plass til bilder
const Home = () => {
  return (
    <body className="home-screen">
      <div className="flex p-20 ">
        <div className="w-1/2 pe-11">
          <img src={Bilde1} alt="" className=" shadow-lg shadow-gray-600 " />
        </div>
        <div className="w-1/2 ps-11">
          <img src={Bilde2} alt="" className=" shadow-lg shadow-gray-600 " />
        </div>
      </div>
      <h1 className="text-5xl text-center">Vi gifter oss</h1>
      <Countdown />
    </body>
  );
};

export default Home;