import * as actionTypes from './actionTypes';

export const setPerformerName = (name) => {
  return {
    type: actionTypes.SET_PERFORMER_NAME,
    name
  };
}

export const setPerformerAge = (age) => {
  return {
    type: actionTypes.SET_PERFORMER_AGE,
    age
  };
}
