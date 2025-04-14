import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ 
    label, 
    onClick, 
    disabled = false,
    variant = 'primary'
}) => {
    const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none";
    const variantStyle = variant === 'primary' 
        ? "bg-blue-500 text-white hover:bg-blue-600" 
        : "bg-gray-200 text-gray-800 hover:bg-gray-300";
    const disabledStyle = disabled 
        ? "opacity-50 cursor-not-allowed" 
        : "cursor-pointer";
    
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${variantStyle} ${disabledStyle}`}
        >
            {label}
        </button>
    );
};
