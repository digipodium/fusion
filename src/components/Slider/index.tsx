import React, { useState } from 'react';

interface SliderProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange }) => {
    const [sliderValue, setSliderValue] = useState(value);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setSliderValue(newValue);
        onChange(newValue);
    };

    return (
        <div className="flex items-center">
            <input
                type="range"
                min={min}
                max={max}
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full h-4 bg-gray-300 rounded-full appearance-none"
            />
            <span className="ml-2">{sliderValue}</span>
        </div>
    );
};

export default Slider;