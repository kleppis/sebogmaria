import React, { useState } from "react";

const Wishlist: React.FC = () => {
    const [weights, setWeights] = useState<number[]>([]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;

        const newWeights = Array.from(target.children).map((child: any) => {
            const charRect = child.getBoundingClientRect();
            const charX = (charRect.left + charRect.right) / 2;
            const distance = Math.abs((mouseX - charX) * 4);
            // Juster følsomheten her (100 er radiusen hvor vekten endres)
            const weight = Math.max(100, 900 - distance * 2);
            return weight;
        });

        setWeights(newWeights);
    };

    const handleMouseLeave = () => {
        // Tilbakestill font-weight når musen forlater
        setWeights([]);
    };

    const text = "Interaktiv Overskrift";

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex space-x-1 min-h-screen w-screen my-auto justify-center text-4xl"
        >
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    style={{
                        fontWeight: weights[index] || 100,
                        transition: "font-weight 0.05s ease" // Smooth overgang
                    }}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default Wishlist;