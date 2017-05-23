import * as actionTypes from './actionTypes';

export const setAudienceName = name => {
  return {
    type: actionTypes.SET_AUDIENCE_NAME,
    name,
  };
};

export const setAudienceNameBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_NAME_BLURRED,
  };
};

export const setAudienceEmail = email => {
  return {
    type: actionTypes.SET_AUDIENCE_EMAIL,
    email,
  };
};

export const setAudienceEmailBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_EMAIL_BLURRED,
  };
};

export const setAudiencePhoneNumber = number => {
  return {
    type: actionTypes.SET_AUDIENCE_PHONENUMBER,
    number,
  };
};

export const setAudiencePhoneNumberBlurred = () => {
  return {
    type: actionTypes.SET_AUDIENCE_PHONENUMBER_BLURRED,
  };
};

export const setAudienceCountry = country => {
  return {
    type: actionTypes.SET_AUDIENCE_COUNTRY,
    country,
  };
};
