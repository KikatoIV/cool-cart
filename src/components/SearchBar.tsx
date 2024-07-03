import React, { useState, ChangeEvent, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { SearchContainer, SearchInput } from "src/styles/searchBarStyles";


interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
