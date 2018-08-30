import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = ({ submitSearch, handleInputChange }) => (
  <div className={styles.search}>
    <input type="text" onChange={handleInputChange} className={styles.inputField} />
    <button type="button" onClick={submitSearch}>Search</button>
  </div>
);

Search.propTypes = {
  submitSearch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Search;
