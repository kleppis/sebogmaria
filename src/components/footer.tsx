import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer pb-20 pt-40 px-40 flex justify-center">
            <div className="w-full">
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
            <div className="w-full text-center font-bold my-auto pb-4">
                <a href="#">Tilbake til toppen</a>
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

export default Footer;