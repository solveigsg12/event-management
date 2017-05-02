import * as actionTypes from './actionTypes';

export const setAudienceName = (name) => {
  return {
    type: actionTypes.SET_AUDIENCE_NAME,
    name
  };
}

export const setAudienceNameBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_NAME_BLURRED,
  };
}

export const setAudienceAge = (age) => {
  return {
    type: actionTypes.SET_AUDIENCE_AGE,
    age
  };
}

export const setAudienceAgeBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_AGE_BLURRED,
  };
}

export const setAudienceSex = (sex) => {
  return {
    type: actionTypes.SET_AUDIENCE_SEX,
    sex
  };
}

export const setAudienceSexBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_SEX_BLURRED,
  };
}

export const setAudienceAddress = (address) => {
  return {
    type: actionTypes.SET_AUDIENCE_ADDRESS,
    address
  };
}

export const setAudienceAddressBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_ADDRESS_BLURRED,
  };
}

export const setAudienceEmail = (email) => {
  return {
    type: actionTypes.SET_AUDIENCE_EMAIL,
    email
  };
}

export const setAudienceEmailBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_EMAIL_BLURRED,
  };
}

export const setAudiencePhoneNumber = (number) => {
  return {
    type: actionTypes.SET_AUDIENCE_PHONENUMBER,
    number
  };
}

export const setAudiencePhoneNumberBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_PHONENUMBER_BLURRED,
  };
}
