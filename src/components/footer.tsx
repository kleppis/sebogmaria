import React from "react";
import "./footer.css"
import Countdown from "./Countdown";


/*
const Footer = () => {
    return (
        <div className="bg-goldLight py-20 text-primary  px-5 sm:px-20 md:px-40 flex flex-col sm:flex-row justify-center">
            <div className="w-full text-center sm:text-left">
                <div className="py-2">
                    <p className="">Ta kontakt</p>
                </div>
                <div className="py-2">
                    <a href="tel:93441227" className="footer-link">+47 93441227</a>
                </div>
                <div className="py-2">
                    Mail:
                </div>
                <div className="py-2">
                    <a href="mailto:" className="footer-link">seb&maria@hotmail.com</a>
                </div>
                <div className="pt-10">
                    Powered by KleppanIT
                </div>

            </div>
            <div className="w-full text-center font-bold my-auto ">
                <a href="#">Maria & Sebastian</a>
            </div>
            <div className="w-full justify-end text-end">
                <div className="py-2">
                    <a href="" className="footer-link transition-all">Hjem</a>
                </div>
                <div className="py-2">
                    <a href="" className="footer-link transition-all">Galleri</a>
                </div>
                <div className="py-2">
                    <a href="" className="footer-link transition-all">Ønskeliste</a>
                </div>
                <div className="py-2">
                    <a href="" className="footer-link transition-all">Innslag</a>
                </div>
                <div className="py-2">
                    <a href="" className="footer-link transition-all">Vår Historie</a>
                </div>

            </div>
        </div>
    )
}

*/

const Footer = () => {
    return (
        <footer className="bg-goldLight py-10 flex flex-col text-center justify-center px-20 text-primary">
            <div className="w-full sm:text-start text-xl mt-10">
                <p>Spørsmål?</p>
                <a href="mailto:kontakt@maria-sebastian.no" className=" hover:text-pinkLight transition-all">Send oss en mail</a>
            </div>
            <div className="w-full">
                <Countdown />
                <p className=" text-5xl">TIL PARTY</p>
            </div>
            <div className="w-full text-xl mt-16 sm:text-end">
                <a href="/KommerDu" className=" hover:text-pinkLight transition-all">Kommer du?</a>
            </div>

        </footer>
    )
}
export default Footer;