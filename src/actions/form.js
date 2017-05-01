import * as actionTypes from './actionTypes';


export const setSignupType = (signupType) => {
  return {
    type: actionTypes.SET_SIGNUP_TYPE,
    signupType
  };
}
