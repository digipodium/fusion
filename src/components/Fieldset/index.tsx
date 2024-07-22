import React, { useState } from 'react';

interface FieldsetProps {
    legend: string;
    emailLabel: string;
    emailPlaceholder?: string;
    className?: string;
    legendClassName?: string;
    inputClassName?: string;
}

const Fieldset: React.FC<FieldsetProps> = ({
    legend,
    emailLabel,
    emailPlaceholder = 'Enter your email',
    className,
    legendClassName,
    inputClassName
}) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <fieldset className={`border p-4 w-96 my-5 mx-5 ${className}`}>
            <legend className={`font-semibold ${legendClassName}`}>{legend}</legend>
            <div className="mt-4 ">
                <label className="block">
                    {emailLabel}
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={emailPlaceholder}
                        className={`form-input mt-1 block ${inputClassName}`}
                    />
                </label>
            </div>
        </fieldset>
    );
};

export default Fieldset;
