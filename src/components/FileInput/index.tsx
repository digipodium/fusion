import React, { ChangeEvent } from 'react';
import '../FileInput/FileInput.css'; // Optional: If you want to include CSS for styling

interface FileInputProps {
    onFileSelect: (file: File | null) => void;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    className?: string;
}

const FileInput: React.FC<FileInputProps> = ({ onFileSelect, accept, multiple = false, disabled = false, className }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onFileSelect(file);
    };

    return (
        <input
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleFileChange}
            className={`file-input ${className} mt-5 mx-5 py-2 px-4 rounded-md focus:ring-2 focus:outline-none border border-slate-500 w-48 mx-5 mt-10`}
        />
    );
};

export default FileInput;
