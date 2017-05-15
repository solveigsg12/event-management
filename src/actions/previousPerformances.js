import * as actionTypes from './actionTypes';

export const setPreviousPerformance = name => {
  console.log(name, ' hvað er name i actions??');
  return {
    type: actionTypes.SET_PREVIOUS_PERFORMANCE,
    name,
  };
};
