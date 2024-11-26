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
                <div className="background bg-no-repeat bg-cover bg-center py-32 px-4 sm:px-20 h-screen">
                    <h1 className="text-pinkDark text-center text-5xl first-letter:sm:text-8xl pb-10">Ønskeliste</h1>
                    <div className=" md:flex justify-center md:space-x-10 md:py-44 text-center">
                        <Button text="Kitchn" url="https://www.kitchn.no/onskeliste/195179/" />
                        <br />
                        <Button text="Andre gaver" url="https://onskelister.no/liste?id=6i3MfM0UlD0dWrleMfl4" />
                        <br />
                        <div className=" bg-pinkLight hover:bg-pinkDark px-4 py-2 text-white mx-auto mt-10 md:mt-0 rounded-lg shadow-md shadow-pinkLight2-500 hover:shadow-black active:scale-95 max-w-md transition-all">
                            <button
                                onClick={toggleExpand}
                                className="w-full text-6xl text-pinkLight-500 hover:text-pinkLight-700 pt-2"
                            >
                                Pengegave
                            </button>
                            {isExpanded && (
                                <div className="mt-4 text-gray-700">
                                    <p>
                                        Dette er tilleggsinformasjonen som vises når du klikker på knappen. Her kan du skrive mer
                                        detaljer, vise bilder eller annen relevant informasjon.
                                    </p>
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