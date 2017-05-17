import * as actionTypes from './actionTypes';

export const setPreviousPerformance = name => {
  return {
    type: actionTypes.SET_PREVIOUS_PERFORMANCE,
    name,
  };
};
