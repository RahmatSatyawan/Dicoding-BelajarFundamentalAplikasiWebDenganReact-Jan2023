import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
        ></input>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default SearchBar;
