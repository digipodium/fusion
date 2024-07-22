import React from 'react';
import clsx from 'clsx';

interface TextareaProps {
    children: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    cols?: number;
    className?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    variant?: 'filled' | 'outlined' | 'default' | 'light';
}

const colorClasses = {
    primary: 'bg-blue-500 border-blue-500',
    secondary: 'bg-gray-500 border-gray-500',
    danger: 'bg-red-500 border-red-500',
    success: 'bg-green-500 border-green-500',
    warning: 'bg-yellow-500 border-yellow-500',
    info: 'bg-teal-500 border-teal-500',
    light: 'bg-gray-200 border-gray-200',
    dark: 'bg-gray-800 border-gray-800',
};

const Textarea: React.FC<TextareaProps> = ({
    children,
    onChange,
    placeholder,
    rows = 4,
    cols = 30,
    className,
    disabled,
    variant = 'filled',
    color = 'primary',
}) => {
    return (
        <textarea
            className={clsx(
                'mt-5 py-2 px-4 rounded-md focus:ring-2 focus:outline-none border w-48',
                variant === 'outlined' ? 'bg-white' : colorClasses[color],
                disabled ? 'bg-gray-100 cursor-not-allowed' : '',
                className
            )}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            disabled={disabled}
        >
            {children}
        </textarea>
    );
};

export default Textarea;
