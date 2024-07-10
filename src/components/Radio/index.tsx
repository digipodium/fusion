import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface RadioProps {
  options: Option[];
  checked: string;
  onChange: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ options, checked, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option.value}
            checked={checked === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio text-indigo-600 h-4 w-4"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;