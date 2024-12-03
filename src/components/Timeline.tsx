import React from 'react';
import { useInView } from 'react-intersection-observer';
import First from "../assets/first_date.jpg";
import Second from "../assets/second_date.jpg";
import Sammen from "../assets/vi ble sammen.png";
import Exclusive from "../assets/exclusive.jpg";
import Marry from "../assets/marry_.jpg";
import BF from "../assets/bf_.jpg";



const TimelineView = () => {
    const steps = [
        {
            id: 1,
            content: '24.august 2022',
            text: 'Vårt første møte på Velkommen til Oslo. ',
        },
        {
            id: 2,
            content: '27.november 2022',
            image: BF,
            text: '<b>Sebastian:</b> Har du Kjæreste? <br> <b>Maria:</b> Nei? <br> <b>Sebastian:</b> Erru gira på en date? <br> <b>Maria:</b> Eeeeeeeeh ja?'
        },
        {
            id: 3,
            content: '30.november 2022',
            image: First,
            text: 'Første date på Oslo Camping minigolf',
        },
        {
            id: 4,
            content: '6. desember 2022',
            image: Second,
            text: 'Andre date på Paradox museum',
        },
        {
            id: 5,
            content: '11. desember 2022',
            text: 'Første forsøk: Vil du være exclusive?',
        },
        {
            id: 4,
            content: '15. januar 2023',
            image: Exclusive,
            text: 'Andre (et litt klarere) forsøk: Nå er vi exclusive',
        },
        {
            id: 4,
            content: '29. januar 2023',
            image: Sammen,
            text: 'Nå er vi kjærester',
        },
        {
            id: 4,
            content: '24. august 2024',
            image: Marry,
            text: 'Vil du gifte deg med meg?',
        },
    ];

    return (
        <>
            {steps.map((step) => (
                <TimelineStep key={step.id} content={step.content} image={step.image} text={step.text} />
            ))}
        </>
    );
};

const TimelineStep = ({
    content,
    image,
    text,
}: {
    content: string;
    image?: string; // Optional prop for added safety
    text: string;
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div
            ref={ref}
            className={`snap-item snap-center transition-opacity duration-700 ease-in-out transform ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } flex flex-col items-center justify-center `}
        >
            <div className="bg-goldLight p-6 rounded-lg shadow-lg w-2/3 text-center mt-36 text-white">
                <h3 className="text-2xl md:text-4xl font-bold pb-4">{content}</h3>
                <p dangerouslySetInnerHTML={{ __html: text }} />
                {image && <img src={image} alt="Timeline" className='h-56 sm:h-64 object-cover mx-auto mt-4 rounded' />}
            </div>
        </div>
    );
};

export default TimelineView;