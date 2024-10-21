import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const KommerDu = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (iframeRef.current) {
                // Hvis skjemaet er sendt inn, sett høyden til en mindre verdi
                if (iframeRef.current.contentWindow?.location.href.includes("formResponse")) {
                    iframeRef.current.style.height = '400px'; // Juster denne verdien som ønsket
                } else {
                    // Standard høyde når skjemaet vises
                    iframeRef.current.style.height = '1300px';
                }
            }
        };

        // Kall handleResize når iframe laster
        const iframe = iframeRef.current;
        iframe?.addEventListener('load', handleResize);

        // Fjern event listener når komponenten demonteres
        return () => {
            iframe?.removeEventListener('load', handleResize);
        };
    }, []);

    return (
        <>
            <div className="bg-primary">
                <Navbar />
            </div>
            <div className="bg-primary">
                <div className="flex justify-center py-20">
                    <iframe
                        ref={iframeRef}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfxdReGHt71C3wRwXNIoyz1qZgT54IAYdh9UI9wZr9Lg8yo5Q/viewform?embedded=true"
                        width="640"
                        style={{ height: '1200px', border: 'none' }}
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Google Form"
                    >
                        Laster inn …
                    </iframe>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default KommerDu;