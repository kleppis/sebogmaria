import React from 'react';
import "./button.css";
import { div } from 'three/webgpu';

interface ButtonProps {
    text: string;
    url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
    return (

        <a href={url}>
            <button
                className="bg-pinkLight hover:bg-pinkDark transition-all text-5xl xl:text-7xl text-white px-4 py-2 mt-10 lg:mt-0 rounded-lg shadow-md shadow-pinkLight2-500 hover:shadow-black active:scale-95"
            >
                {text}
            </button>
        </a>

    );
};

export default Button;