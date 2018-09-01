import Redux from 'redux';
import renderMatrix from './generate_field';

const mineFieldReducer = (state, action) => {
  const defaultState = {
    matrix: renderMatrix(10),
  };
  if (!state || action.type === 'RESTART') {
    return defaultState;
  }
  throw new Error();
};

export default mineFieldReducer;
