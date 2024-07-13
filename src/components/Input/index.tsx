import React from 'react';
// import './Input.css'; // Optional: If you want to include CSS for styling
import clsx from 'clsx';
import tailwindClasses from '../../themes/themes';

interface InputProps {
    type: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    radius: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    padding: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    variant: 'filled' | 'outlined' 
}

const Input: React.FC<InputProps> = ({ type, placeholder, onChange, disabled, color = 'secondary',
    size = 'md', radius = 'md', padding = 'md', variant = 'filled'
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder ? placeholder : placeholder}
            onChange={onChange}
            disabled={disabled}
            className={clsx(['outlined'].includes(variant) ? tailwindClasses.borderClass[color] : '',
                variant === 'outlined' ? 'bg-white' : tailwindClasses.backgroundClass[color],
                color === 'light' ? 'text-black' : 'text-white',
                tailwindClasses.paddingClass[padding],
                tailwindClasses.radiusClass[radius],
                tailwindClasses.colorClass[color],
                tailwindClasses.textClass[size],
                "block mx-5 my-10 w-80 border-gray-600 placeholder-gray-600 focus:ring-blue-500 focus:border-blue-500")}
        />
    );
};

export default Input;
