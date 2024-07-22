import React from 'react';

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange, className }) => {
    return (
        <label className={`inline-flex items-center ${className}`}>
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="ml-2">{label}</span>
        </label>
    );
};

export default Checkbox;
