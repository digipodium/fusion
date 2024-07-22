import React from 'react';

interface AlertProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    onClose?: () => void;
    className?: string;
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info', onClose, className }) => {
    const baseClasses = 'px-4 py-3 rounded relative border';
    const typeClasses = {
        success: 'bg-green-100 border-green-400 text-green-700',
        error: 'bg-red-100 border-red-400 text-red-700',
        warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
        info: 'bg-blue-100 border-blue-400 text-blue-700',
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]} ${className}`} role="alert">
            <span className="block sm:inline">{message}</span>
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                    <span className="text-2xl">&times;</span>
                </button>
            )}
        </div>
    );
};

export default Alert;
