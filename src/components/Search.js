import React from "react";

function Search({ setSearchChar }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={(e) => setSearchChar(e.target.value)}
          placeholder="Search for a Character"
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
