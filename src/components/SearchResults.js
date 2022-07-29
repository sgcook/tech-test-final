import React from "react";
import PropTypes from "prop-types";
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if(!results.length) {
    return <p>No results</p>
  } else {
   return (
     <div className="search-results__images">
      {results.map((image) => (
        <img className="card-image" src={image} alt="space" />
      ))}
     </div>
   ); 
  }
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

export default SearchResults;