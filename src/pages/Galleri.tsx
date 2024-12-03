import React from "react";
import Navbar from "../components/navbar";
import "./Galleri.css";
import "../index.css";

import Bilde1 from "../gallery/Maria & Seb-1.jpg";
import Bilde2 from "../gallery/Maria & Seb-114.jpg";
import Bilde3 from "../gallery/Maria & Seb-116.jpg";
import Bilde4 from "../gallery/Maria & Seb-129.jpg";
import Bilde5 from "../gallery/Maria & Seb-154.jpg";
import Bilde6 from "../gallery/Maria & Seb-172.jpg";
import Bilde7 from "../gallery/Maria & Seb-185.jpg";
import Bilde8 from "../gallery/Maria & Seb-189.jpg";
import Bilde11 from "../gallery/Maria & Seb-203.jpg";
import Bilde13 from "../gallery/Maria & Seb-206.jpg";
import Bilde14 from "../gallery/Maria & Seb-216.jpg";
import Bilde15 from "../gallery/Maria & Seb-225.jpg";
import Bilde16 from "../gallery/Maria & Seb-229.jpg";
import Bilde17 from "../gallery/Maria & Seb-239.jpg";
import Bilde18 from "../gallery/Maria & Seb-241.jpg";
import Bilde19 from "../gallery/Maria & Seb-777.jpg";
import Bilde20 from "../gallery/Maria & Seb-943.jpg";
import Bilde21 from "../gallery/Maria & Seb-947.jpg";



import Footer from "../components/footer";

const Galleri = () => {
    return (
        <>
            <Navbar />
            <body className="gallery-screen py-32 px-4 sm:px-20">
                <h1 className="text-pinkDark text-center text-5xl sm:text-8xl pb-10">Galleri</h1>
                <div className="">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                        {[
                            { src: Bilde1, type: "landscape" },
                            { src: Bilde2, type: "landscape" },
                            { src: Bilde3, type: "landscape" },
                            { src: Bilde4, type: "landscape" },
                            { src: Bilde21, type: "portrait" },

                            { src: Bilde5, type: "landscape" },
                            { src: Bilde6, type: "landscape" },
                            { src: Bilde7, type: "landscape" },
                            { src: Bilde8, type: "landscape" },
                            { src: Bilde11, type: "landscape" },
                            { src: Bilde13, type: "landscape" },
                            { src: Bilde14, type: "portrait" },
                            { src: Bilde15, type: "landscape" },
                            { src: Bilde16, type: "landscape" },
                            { src: Bilde17, type: "landscape" },
                            { src: Bilde18, type: "landscape" },
                            { src: Bilde19, type: "landscape" },
                            { src: Bilde20, type: "landscape" },

                        ].map((image, index) => (
                            <div
                                key={index}
                                className={`relative ${image.type === "portrait"
                                    ? "row-span-2 w-full h-96 md:h-auto"
                                    : "h-96 md:h-64 lg:h-72"
                                    }`}
                            >
                                {/* Placeholder animation */}
                                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>

                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
                                    onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
};

export default Galleri;