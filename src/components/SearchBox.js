import React from 'react';

const SearchBox = ({ value, onChange, onSearch }) => (
  <div>
    <input type="text" value={value} onChange={onChange} />
    <button type="submit" onClick={onSearch}>
      Search
    </button>
  </div>
);

export default SearchBox;
