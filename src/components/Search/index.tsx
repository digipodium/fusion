import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';

interface SearchProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    className?: string;
    debounceTime?: number;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch, className, debounceTime = 300 }) => {
    const [query, setQuery] = useState('');
    const debounceTimeout = useRef<number | undefined>(undefined);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        debounceSearch(value);
    };

    const debounceSearch = (query: string) => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = window.setTimeout(() => {
            onSearch(query);
        }, debounceTime);
    };

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);

    return (
        <form onSubmit={handleFormSubmit} className={`flex items-center ${className}`}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="p-2"
            />
            <button type="submit" className="p-2 px-4 text-base border-none bg-blue-500 text-white rounded ml-2 cursor-pointer hover:bg-blue-700">
                Search
            </button>
        </form>
    );
};

export default Search;
