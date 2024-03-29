import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  }

  return (
    <>
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search here!"
        onChange={(e) => setValue(e.target.value)}>
      </input>
      <button className="search-btn" type="submit">Go!</button>
    </form>
    </>
  )
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;