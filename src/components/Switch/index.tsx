import React, { useState } from 'react';

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: string;
};

const Switch: React.FC<SwitchProps> = ({ checked, onChange, color = 'blue' }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <div
            className={`relative inline-block w-10 h-6 rounded-full bg-${color}-200 transition-colors duration-300`}
            onClick={handleToggle}
        >
            <div
                className={`absolute left-0 top-0 w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
                    isChecked ? 'translate-x-4' : ''
                }`}
            />
        </div>
    );
};

export default Switch;