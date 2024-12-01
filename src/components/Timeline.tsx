import React from 'react';
import { useInView } from 'react-intersection-observer';

const TimelineView = () => {
    const steps = [
        {
            id: 1,
            content: '24.august 2022',
            image: 'https://via.placeholder.com/100',
            text: 'Vårt første møte på Velkommen til Oslo. ',
        },
        {
            id: 2,
            content: '29.november 2022',
            image: 'https://via.placeholder.com/100',
            text: '<b>Sebastian:</b> Har du Kjæreste? <br> <b>Maria:</b> Nei? <br> <b>Sebastian:</b> Erru gira på en date? <br> <b>Maria:</b> Eeeeeeeeh ja?'
        },
        {
            id: 3,
            content: '1.desember 2022',
            image: 'https://via.placeholder.com/100',
            text: 'Første date på Oslo Camping minigolf',
        },
        {
            id: 4,
            content: '6. desember 2022',
            image: 'https://via.placeholder.com/100',
            text: 'Andre date på Paradox museum',
        },
        {
            id: 5,
            content: '11. desember 2022',
            image: 'https://via.placeholder.com/100',
            text: 'Første forsøk: Vil du være exclusive?',
        },
        {
            id: 4,
            content: '15. januar 2023',
            image: 'https://via.placeholder.com/100',
            text: 'Andre (et litt klarere) forsøk: Nå er vi exclusive',
        },
        {
            id: 4,
            content: '29. januar 2023',
            image: 'https://via.placeholder.com/100',
            text: 'Nå er vi kjærester',
        },
        {
            id: 4,
            content: '24. august 2024',
            image: 'https://via.placeholder.com/100',
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
    image: string;
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
                } flex flex-col items-center justify-center h-[55vh]`}
        >
            <div className="bg-goldLight p-6  rounded-lg shadow-lg w-2/3 text-center text-white">
                <h3 className="text-2xl md:text-4xl font-bold pb-4">{content}</h3>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    );
};

export default TimelineView;