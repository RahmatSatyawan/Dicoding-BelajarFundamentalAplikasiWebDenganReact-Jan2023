import React from "react";

const HeaderPage = ({ searchTitle, onSearch }) => {
  return (
    <div>
      <header>
        <h1>Notes</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTitle}
            onChange={onSearch}
          ></input>
        </div>
      </header>
    </div>
  );
};

export default HeaderPage;
