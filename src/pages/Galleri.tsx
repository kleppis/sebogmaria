import React from "react";
import Navbar from "../components/navbar";
import "./Galleri.css";
import "../index.css";

import Bilde1 from "../assets/bilde1.jpg";
import Bilde2 from "../assets/bilde2.jpg";
import Bilde3 from "../assets/bilde3.jpg";
import Bilde4 from "../assets/bilde4.jpg";
import Bilde5 from "../assets/bilde5.jpg";
import Footer from "../components/footer";

const Galleri = () => {
    return (
        <>
            <Navbar />
            <body className="gallery-screen py-32 px-4 sm:px-20">
                <h1 className="text-pinkDark text-center text-8xl pb-10">Galleri</h1>
                <div className="">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="relative">
                            <img src={Bilde1} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde2} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde3} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde4} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde5} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde1} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde2} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <img src={Bilde3} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </body>
            <Footer />

        </>
    );
};

export default Galleri;