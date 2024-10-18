import React from "react"
import Navbar from "../components/navbar"
import "./Galleri.css";

import Bilde1 from "../assets/bilde1.jpg";
import Bilde2 from "../assets/bilde2.jpg";
import Bilde3 from "../assets/bilde3.jpg";
import Bilde4 from "../assets/bilde4.jpg";
import Bilde5 from "../assets/bilde5.jpg";



const Galleri = () => {
    return (
        <body className="gallery-screen px-20">
            <Navbar />
            <div className="grid grid-flow-col w-full">
                <div className="">
                    <img src={Bilde1} alt="" />
                </div>
                <div className="">
                    <img src={Bilde2} alt="" />
                </div>
                <div className="">
                    <img src={Bilde3} alt="" />
                </div>
                <div className="">
                    <img src={Bilde3} alt="" />
                </div>
            </div>
            <div className="flex w-full">
                <div className="">
                    <img src={Bilde4} alt="" />
                </div>
                <div className="">
                    <img src={Bilde5} alt="" />
                </div>
                <div className="">
                    <img src={Bilde1} alt="" />
                </div>
            </div>
            <div className="flex w-full">
                <div className="">
                    <img src={Bilde1} alt="" />
                </div>
                <div className="">
                    <img src={Bilde5} alt="" />
                </div>
                <div className="">
                    <img src={Bilde4} alt="" />
                </div>
            </div>
        </body>
    )
}

export default Galleri;