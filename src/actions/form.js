import * as actionTypes from './actionTypes';


export const setSignupType = (signupType) => {
  return {
    type: actionTypes.SET_SIGNUP_TYPE,
    signupType
  };
}

export const setHostName = (name) => {
  return {
    type: actionTypes.SET_HOST_NAME,
    name
  };
}

export const setHostAge = (age) => {
  return {
    type: actionTypes.SET_HOST_AGE,
    age
  };
}

export const setHostSex = (sex) => {
  return {
    type: actionTypes.SET_HOST_SEX,
    sex
  };
}

export const setHostAddress = (address) => {
  return {
    type: actionTypes.SET_HOST_ADDRESS,
    address
  };
}

export const setHostEmail = (email) => {
  return {
    type: actionTypes.SET_HOST_EMAIL,
    email
  };
}
export const setHostPhoneNumber = (number) => {
  return {
    type: actionTypes.SET_HOST_PHONENUMBER,
    number
  };
}

export const setHostDescription = (description) => {
  return {
    type: actionTypes.SET_HOST_DESCRIPTION,
    description
  };
}

export const setHostInterests= (interests) => {
  return {
    type: actionTypes.SET_HOST_INTERESTS,
    interests
  };
}

export const setAudienceName = (name) => {
  return {
    type: actionTypes.SET_AUDIENCE_NAME,
    name
  };
}

export const setAudienceAge = (age) => {
  return {
    type: actionTypes.SET_AUDIENCE_AGE,
    age
  };
}

export const setAudienceSex = (sex) => {
  return {
    type: actionTypes.SET_AUDIENCE_SEX,
    sex
  };
}

export const setAudienceAddress = (address) => {
  return {
    type: actionTypes.SET_AUDIENCE_ADDRESS,
    address
  };
}

export const setAudienceEmail = (email) => {
  return {
    type: actionTypes.SET_AUDIENCE_EMAIL,
    email
  };
}
export const setAudiencePhoneNumber = (number) => {
  return {
    type: actionTypes.SET_AUDIENCE_PHONENUMBER,
    number
  };
}
