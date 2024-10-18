import React from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import "./Innslag.css"
import Bilde1 from "../assets/bilde5.jpg";

const Innslag = () => {
    return (
        <body className="px-20 innslag-screen">
            <Navbar />
            <h1 className="text-center text-5xl py-10">Har du lyst til å ha et innslag?</h1>
            <div className="w-1/2 mx-auto ">
                <p className="text-xl">
                    Vi setter pris på alle mulig innslag. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus eaque quibusdam voluptatum praesentium id est soluta culpa sit consequatur.
                </p>
            </div>
            <h2 className="pt-20 pb-10 text-4xl text-center">Ta kontakt med våre toastmastere</h2>
            <div className="flex justify-center space-x-10">
                <div className="w-1/4 text-center">
                    <div className="relative group ">
                        <img src={Bilde1} alt="" className="shadow-lg shadow-gray-400" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <p
                                className="text-white text-3xl font-bold"
                            >
                                Kødden type
                            </p>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold py-2">Sebastian Andreassen</h2>
                    <Button text="+47 93441227" />
                </div>
                <div className="w-1/4 text-center">
                    <div className="relative group ">
                        <img src={Bilde1} alt="" className="shadow-lg shadow-gray-400" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <p
                                className="text-white text-3xl font-bold"
                            >
                                Biter litt
                            </p>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold py-2">Sebastian Andreassen</h2>
                    <Button text="+47 93441227" />
                </div>
            </div>
            <div className="text-center py-20">
                <p className="text-xl pb-5">Eller send inn ditt ønske på mail her</p>
                <Button text="Send inn" />
            </div>
        </body>
    )
}

export default Innslag;