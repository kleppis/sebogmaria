import React, { useEffect, useState } from "react";


const Countdown = () => {
    const weddingDate = new Date("2025-07-26T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(weddingDate - new Date().getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(weddingDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    const formatTime = (ms: number) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

        return `${days}d ${hours}t ${minutes}m`;
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white-300 ">
            <p className="text-4xl text-primary">{formatTime(timeLeft)}</p>
        </div>
    );
};

export default Countdown;