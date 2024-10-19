import React from 'react';
import "./button.css";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="button-1 text-xl px-4 py-2 rounded-sm shadow-md shadow-gray-400 hover:shadow-black active:scale-95"
        >
            {text}
        </button>
    );
};

export default Button;