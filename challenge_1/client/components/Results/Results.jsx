import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <ul id="results-container">
    {results.map(entry => (
      <li>
        Date:{entry.date}
        <br />
        Description: {entry.description}
      </li>
    ))}
  </ul>
);

Results.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Results;
