import React, { useEffect, useState } from "react";
import "./Home.css";
import "./index.css";
import Bilde1 from "./gallery/Maria & Seb-116.jpg";
import Bilde2 from "./gallery/Maria & Seb-229.jpg";
import Bilde4 from "./gallery/Maria & Seb-216.jpg";
import Footer from "./components/footer";
import Navbar_home from "./components/navbar-home";
import MouseHover from "./components/mouseHover";
import { useNavigate } from 'react-router-dom';


// Hovedkomponent med plass til bilder
const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Galleri');
  };

  return (
    <>
      <div className="home-screen">
        <div className="home-background">
          <div className="">
            <div className="flex justify-center">
              <MouseHover />
            </div>
          </div>
        </div>
        <div>
          <Navbar_home />
          <h1 className="hidden md:block text-9xl text-center text-pinkLight header-h1">Velkommen</h1>
          <div className=" md:hidden bg-goldLight mx-10 sm:mx-20 p-5 rounded-md mt-5 shadow-lg shadow-gray-400">
            <h1 className="text-primary text-3xl">Velkommen</h1>
            <p className="text-primary text-xl mt-5">Hei og velkommen til vår nettside. Her finner du litt informasjon om den store dagen,
              samt litt annet snacks blant annet noe av vår historie, ønskelister og hvem du skal kontakte for innslag og andre henvendelser.
            </p>
          </div>
          <div className=" md:flex px-10 sm:px-20 md:px-20  py-14">
            <div className=" md:me-12 mb-14 md:mb-0 relative group cursor-pointer">
              <img src={Bilde1} alt="" onClick={handleClick} className=" shadow-lg shadow-gray-600 " />
            </div>
            <div className=" md:ms-12 relative group cursor-pointer hidden md:block">
              <img src={Bilde2} alt="" onClick={handleClick} className=" shadow-lg shadow-gray-600 " />
            </div>
          </div>
          <div className=" hidden bg-goldLight mx-10 sm:mx-20 p-5 rounded-md mt-5 shadow-lg shadow-gray-400">
            <h1 className="text-primary">Velkommen</h1>
            <p className="text-primary">Hei og velkommen til vår nettside. Her finner du litt informasjon om den store dagen,
              samt litt annet snacks blant annet noe snacav vår historie, ønskelister og hvem du skal kontakte for innslag og andre henvendelser.
            </p>
          </div>



          <div className=" sm:flex px-10 sm:px-20 pb-10 md:py-40 xl:space-x-10">
            <img src={Bilde4} alt="" className="hidden xl:block shadow-lg w-1/2  shadow-gray-600 h-1/6" />
            <div className="w-full xl:w-auto">
              <h2 className="text-4xl text-center xl:text-start ">Vi gleder oss til å feire med dere</h2>
              <h3 className="mt-10 hidden md:block text-center xl:text-start text-3xl">Vielse: &emsp; Fon kirke &emsp; 13.30</h3>
              <h3 className="mt-10 text-center xl:text-start md:hidden text-3xl">Vielse: &nbsp; Fon kirke &nbsp; 13.30</h3>
              <div className="mx-auto w-fit xl:mx-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.2537464981176!2d10.203136097175884!3d59.412162101325116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646cd4712110365%3A0xb4c3b902b6386a14!2sFon%20kirke!5e0!3m2!1sno!2sno!4v1732392043869!5m2!1sno!2sno"
                  width="400"
                  height="300"
                  style={{ margin: "3rem auto" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Small"
                  className=" border-8 border-orange-300 border-solid rounded-md shadow-lg shadow-grey-500 mt-10 w-full md:w-96"
                ></iframe>
              </div>
              <h3 className="mt-10 hidden text-center xl:text-start md:block text-3xl ">Fest: &emsp; Sjøstua &emsp; 17.00</h3>
              <h3 className="mt-10 text-center xl:text-start md:hidden text-3xl">Fest: &nbsp; Sjøstua &nbsp; 17.00</h3>
              <div className="mx-auto w-fit xl:mx-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.2778474205925!2d10.471687331003992!3d59.24884553513399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b0bd3d9ddb53%3A0x6f5daeb78d77aa27!2sHusvik%20og%20Nes%20Vel%20Sj%C3%B8stua!5e0!3m2!1sno!2sno!4v1732391636271!5m2!1sno!2sno"
                  width="400"
                  height="300"
                  style={{}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Small"
                  className=" border-8 border-orange-300 border-solid rounded-md shadow-lg shadow-grey-500 mt-10 w-full md:w-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
};

export default Home;