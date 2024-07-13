import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../Search/Search.css'; // Optional: If you want to include CSS for styling

interface SearchProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    className?: string;
    debounceTime?: number;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch, className, debounceTime = 300 }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        debounceSearch(value);
    };

    const debounceSearch = (query: string) => {
        setTimeout(() => {
            onSearch(query);
        }, debounceTime);
    };

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleFormSubmit} className={`search-form ${className}`}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="search-input"
            />
            <button type="submit" className="search-button ">Search</button>
        </form>
    );
};

export default Search;
