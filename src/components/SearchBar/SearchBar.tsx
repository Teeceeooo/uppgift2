import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

interface SearchBarProps {
    onSearch: (query: string) => void
}

const StyledInput = styled.input`
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value
            setQuery(value)
            onSearch(value)
        },
        [onSearch]
    )

    return (
        <StyledInput
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
        />
    )
}

export default SearchBar
