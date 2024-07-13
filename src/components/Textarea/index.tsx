import React from 'react';
import './Textarea.css'; // Optional: If you want to include CSS for styling

interface TextareaProps {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    cols?: number;
    className?: string;
    disabled?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ onChange, placeholder, rows = 4, cols = 30, className, disabled }) => {
    return (
        <textarea
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            className={`textarea ${className} mt-5 mx-5 py-2 px-4 rounded-md focus:ring-2 focus:outline-none border border-slate-500 w-48 mx-5 mt-10`}
            disabled={disabled}
        />
    );
};

export default Textarea;
