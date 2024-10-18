import React, { useEffect, useState } from "react";
import "./Home.css";
import "./index.css";
import Bilde1 from "./assets/bilde2.jpg";
import Bilde2 from "./assets/bilde3.jpg";
import Bilde4 from "./assets/bilde4.jpg";
import Navbar from "./components/navbar";
import Countdown from "./components/Countdown";



// Hovedkomponent med plass til bilder
const Home = () => {
  return (
    <body className="home-screen px-20">
      <Navbar />
      <div className="h-screen">
        <h1 className="text-8xl text-center py-40">Vi gifter oss</h1>
        <p className="text-center text-2xl font-bold">Maria & Sebastian</p>
        <Countdown />

      </div>
      <div className="flex -mt-28  pb-10">
        <div className=" me-12 relative group cursor-pointer">
          <img src={Bilde1} alt="" className=" shadow-lg shadow-gray-600 " />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <a
              href="/ny-side" // Sett lenken til ønsket side her
              className="text-white text-3xl font-bold"
            >
              Sebastian
            </a>
          </div>
        </div>
        <div className=" ms-12 relative group cursor-pointer">
          <img src={Bilde2} alt="" className=" shadow-lg shadow-gray-600 " />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <a
              href="/ny-side" // Sett lenken til ønsket side her
              className="text-white text-3xl font-bold"
            >
              Maria
            </a>
          </div>
        </div>
      </div>

      <div className="flex py-10 space-x-10">
        <img src={Bilde4} alt="" className="shadow-lg shadow-gray-600 w-1/3 " />
        <div>
          <h2 className="text-4xl">Vi gleder oss til å feire med dere</h2>
          <div className="flex py-10">
            <h3 className="text-2xl">Sted:</h3>
            <p className="text-2xl">Tjøllingvollen</p>
          </div>
        </div>
      </div>
    </body >
  );
};

export default Home;