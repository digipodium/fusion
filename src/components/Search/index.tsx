import React, { useState } from 'react';

interface SearchProps {
    placeholder: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onChange, onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchValue);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <input
                type="text"
                placeholder={placeholder}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
            />
            <button
                type="button"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Search;