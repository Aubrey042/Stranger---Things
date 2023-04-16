import React from 'react';

const SearchForm = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search posts..."
      />
    </form>
  );
};

export default SearchForm;
