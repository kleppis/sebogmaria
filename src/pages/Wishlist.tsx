import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../index.css";
import "./Wishlist.css"
import Button from "../components/button";


const Galleri = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <Navbar />
            <body className="bg-primary">
                <div className="background bg-no-repeat bg-cover bg-center py-32 px-4 sm:px-20 min-h-screen">
                    <h1 className="text-pinkDark text-center text-5xl sm:text-8xl pb-10">Ønskeliste</h1>

                    <div className=" lg:flex justify-center lg:space-x-10 lg:py-44 text-center">
                        <Button text="Kitchn" url="https://www.kitchn.no/onskeliste/195179/" />
                        <br />
                        <Button text="Andre gaver" url="https://onskelister.no/liste?id=6i3MfM0UlD0dWrleMfl4" />
                        <br />
                        <div className=" bg-pinkLight hover:bg-pinkDark px-4 py-2 text-white mx-auto mt-10 lg:mt-0 rounded-lg shadow-md shadow-pinkLight2-500 hover:shadow-black active:scale-95 w-fit transition-all">
                            <button
                                onClick={toggleExpand}
                                className="text-5xl xl:text-7xl text-pinkLight-500 hover:text-pinkLight-700 "
                            >
                                Pengegave
                            </button>
                            {isExpanded && (
                                <div className="mt-4 text-gray-700">
                                    <p>
                                        Ønsker du å gi en pengegave? <br />
                                        Da setter vi stor pris på om du vil gi til dette kontonummeret:
                                    </p>
                                    <p className="font-bold">6032.16.77757</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </body>
            <Footer />

        </>
    );
};

export default Galleri;