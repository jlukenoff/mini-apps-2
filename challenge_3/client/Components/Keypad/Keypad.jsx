import React from 'react';
import PropTypes from 'prop-types';
import styles from './Keypad.css';

const Keypad = props => (
  <div className={styles.container}>
    <div className={styles.row}>
      <button type="button" className={styles.cell}>0</button>
      <button type="button" className={styles.cell}>1</button>
      <button type="button" className={styles.cell}>2</button>
    </div>
    <div className={styles.row}>
      <button type="button" className={styles.cell}>3</button>
      <button type="button" className={styles.cell}>4</button>
      <button type="button" className={styles.cell}>5</button>
    </div>
    <div className={styles.row}>
      <button type="button" className={styles.cell}>6</button>
      <button type="button" className={styles.cell}>7</button>
      <button type="button" className={styles.cell}>8</button>
    </div>
    <div className={styles.row}>
      <button type="button" className={styles.cell}>9</button>
      <button type="button" className={styles.cell}>10</button>
    </div>
  </div>
);

Keypad.propTypes = {
};

export default Keypad;
