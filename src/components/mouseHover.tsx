import React, { useState } from "react";
import "./mouseHover.css";


const MouseHover: React.FC = () => {

    const [weights, setWeights] = useState<number[]>([]);


    // Funksjon for å sjekke om nettleseren er Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isSafari) {
            // Forenklet logikk for Safari for bedre ytelse
            handleSafariMouseMove(event);
        } else {
            // Standard logikk for andre nettlesere
            handleStandardMouseMove(event);
        }
    };

    const handleSafariMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // En enklere versjon av logikken for Safari
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;

        const newWeights = Array.from(target.querySelectorAll(".char")).map((child: any) => {
            const charRect = child.getBoundingClientRect();
            const charX = (charRect.left + charRect.right) / 2;
            const distance = Math.abs((mouseX - charX) * 1.5);
            // Gjør vekten mer statisk for å redusere ytelseproblemer
            const weight = Math.max(500, 900 - distance);
            return weight;
        });

        setWeights(newWeights);
    };

    let animationFrameId: number;

    const handleStandardMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
            // Fortsett med beregninger her
        });
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Beregn nye font-weight verdier for alle tegn
        const newWeights = Array.from(target.querySelectorAll(".char")).map((child: any) => {
            const charRect = child.getBoundingClientRect();
            const charX = (charRect.left + charRect.right) / 2;
            const charY = (charRect.top + charRect.bottom) / 2;
            const distanceX = Math.abs((mouseX - charX) * 1.5);
            const distanceY = Math.abs((mouseY - charY) * 1);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            // Juster følsomheten her (100 er radiusen hvor vekten endres)
            const weight = Math.max(500, 1000 - distance * 2);
            return weight;
        });

        setWeights(newWeights);
    };

    const handleMouseLeave = () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        // Tilbakestill font-weight når musen forlater
        setWeights([]);
    };

    const lines = ["VI GIFTER OSS", "-26.05.2025-"];

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="text-center w-screen justify-center text-primary text-7xl sm:pt-40 lg:pt-80  pb-40"
        >
            {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex justify-center space-x-1">
                    {line.split("").map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className="char"
                            style={{
                                fontWeight: weights[lineIndex * line.length + charIndex] || 500,
                                transition: "font-weight 0.05s ease",
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MouseHover;