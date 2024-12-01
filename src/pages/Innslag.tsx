import React from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Bilde1 from "../assets/bilde5.jpg";
import Footer from "../components/footer";
import Bilde3 from "../assets/bilde5.jpg";
import "./Innslag.css";


const Innslag = () => {
    return (
        <>
            <body className="lg:px-40 innslag-screen bg-primary">
                <Navbar />
                <h1 className="text-center text-5xl pt-28 text-pinkDark">Har du lyst til å ha et innslag?</h1>
                <div className="h-20"></div>
                <div className=" mx-auto md:flex justify-center px-10 md:px-0 md:space-x-10">
                    <div className="personimg-1 bg-cover bg-center w-72 h-72 rounded-full mx-auto md:mx-0 shadow-lg shadow-gray-400"></div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <h1 className="text-black text-3xl mb-4 text-center md:text-start">Jørgen Saaghus</h1>
                        <p className="text-center md:text-start">
                            <a href="tel:+4797194726" className="text-xl text-pinkDark hover:text-pinkLight transition-all">+47 971 94 726</a>
                        </p>
                        <p className="mt-5 text-lg text-justify md:text-wrap">Jørgen bor i kollektiv med Sebastian og er den vi ler mest med og av. Han er opptatt av politikk,
                            nyheter og han elsker oppmerksomhet. Jørgen drikker gjerne en burn kl 24.00 rett før han skal legge seg for å ta opp
                            stemingen et hakk. Han er en fyr som er lett å bli glad i. Jørgen kommer til å være en av to toastmaster i bryllupet vårt,
                            så  ikke nøl med å ta kontakt med han.
                        </p>
                    </div>
                </div>
                <div className="h-20"></div>
                <div className=" mx-auto md:flex justify-center px-10 md:px-0 md:space-x-10">
                    <div className="personimg-2 bg-cover bg-center w-72 h-72 rounded-full mx-auto md:mx-0 shadow-lg shadow-gray-400"></div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <h1 className="text-black text-3xl mb-4 text-center md:text-start">Kaja Kleppan Flaat</h1>
                        <p className="text-center md:text-start">
                            <a href="tel:+4796014814" className="text-xl text-pinkDark hover:text-pinkLight transition-all">+47 960 14 814</a>
                        </p>
                        <p className="mt-5 text-lg text-justify md:text-wrap">Lorem ipsum, dolor sit amet sa. Incidunt est a provident fugiat perferendis ipsam iste
                            officiis porro expedita voluptatem nesciunt hic vel quas ipsa ducimus harum magnam laboriosam, magni quis deserunt
                            quia quisquam cupiditate? Vero, adipisci. Non tempora optio eum sed distinctio qui. Amet magni nobis esse porro veritatis
                            in ab ex, provident dolores neque sequi?
                        </p>
                    </div>
                </div>
                <div className="h-20"></div>


            </body>
            <Footer />
        </>
    )
}

export default Innslag;