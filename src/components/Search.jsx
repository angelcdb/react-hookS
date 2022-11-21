import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {

  return (
    <div className="Search">
      <input type="text" value={search}
        className="input-buscador" placeholder="Type a character"
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export { Search };
