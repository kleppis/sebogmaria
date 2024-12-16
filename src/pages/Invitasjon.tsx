import React from 'react';
import { useParams } from 'react-router-dom';
import { div } from 'three/webgpu';

const InvitasjonPage: React.FC = () => {
    const { navn } = useParams<{ navn: string }>();

    return (
        <div className=" bg-primary mx-auto">
            <div className=" justify-center max-w-5xl px-5 sm:px-20 mx-auto">
                <img src="/S&M3.svg" alt="" className='w-52 mx-auto py-12' />
                <h1 className=" font-normal text-5xl md:text-9xl text-pinkDark">
                    du er herved
                </h1>
                <h1 className="pt-5 md:pt-10 italic font-extrabold text-5xl md:text-9xl text-pinkDark">
                    invitert
                </h1>
                <h1 className="pt-5 md:pt-10 text-5xl md:text-9xl text-pinkDark">
                    til vårt
                </h1>
                <h1 className="pt-5 md:pt-10 italic font-extrabold text-5xl md:text-9xl text-pinkDark">
                    bryllup
                </h1>
                <p className='text-center text-2xl md:text-5xl pt-16 md:pt-32 uppercase leading-relaxed'>
                    Vi ønsker deg {navn || 'Gjest'} <br /> hjertelig velkommen til å feire <br /> den store dagen med oss.
                    <br /><br />
                    Vielse i Fon Krike  13.30 <br />
                    også fest i Sjøstua  17.00
                    <br /><br />
                    Hilsen
                </p>
                <img src="/maria-og-sebasatian.svg" alt="" className='w-full mx-auto py-12' />
                <div className='flex justify-center pb-20 md:pb-40'>
                    <a href="/" className='uppercase py-4 px-7 bg-pinkLight text-5xl md:text-9xl rounded-xl text-white hover:bg-pinkDark transition-all drop-shadow-2xl'>mer info</a>
                </div>
            </div>
        </div >
    );
};

export default InvitasjonPage;


// {navn || 'Gjest'}