import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ submitSearch, handleInputChange }) => (
  <div>
    <input type="text" onChange={handleInputChange} />
    <button type="button" onClick={submitSearch}>Search</button>
  </div>
);

Search.propTypes = {
  submitSearch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Search;
