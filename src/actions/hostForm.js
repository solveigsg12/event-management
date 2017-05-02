import * as actionTypes from './actionTypes';

export const setHostName = (name) => {
  return {
    type: actionTypes.SET_HOST_NAME,
    name
  };
}

export const setHostNameBlurred = () => {
  return {
    type: actionTypes.SET_HOST_NAME_BLURRED,
  };
}

export const setHostAge = (age) => {
  return {
    type: actionTypes.SET_HOST_AGE,
    age
  };
}

export const setHostAgeBlurred = () => {
  return {
    type: actionTypes.SET_HOST_AGE_BLURRED,
  };
}

export const setHostSex = (sex) => {
  return {
    type: actionTypes.SET_HOST_SEX,
    sex
  };
}

export const setHostSexBlurred = () => {
  return {
    type: actionTypes.SET_HOST_SEX_BLURRED,
  };
}

export const setHostAddress = (address) => {
  return {
    type: actionTypes.SET_HOST_ADDRESS,
    address
  };
}

export const setHostAddressBlurred = () => {
  return {
    type: actionTypes.SET_HOST_ADDRESS_BLURRED,
  };
}

export const setHostEmail = (email) => {
  return {
    type: actionTypes.SET_HOST_EMAIL,
    email
  };
}

export const setHostEmailBlurred = () => {
  return {
    type: actionTypes.SET_HOST_EMAIL_BLURRED,
  };
}

export const setHostPhoneNumber = (number) => {
  return {
    type: actionTypes.SET_HOST_PHONENUMBER,
    number
  };
}

export const setHostPhoneNumberBlurred = () => {
  return {
    type: actionTypes.SET_HOST_PHONENUMBER_BLURRED,
  };
}

export const setHostDescription = (description) => {
  return {
    type: actionTypes.SET_HOST_DESCRIPTION,
    description
  };
}

export const setHostDescriptionBlurred = () => {
  return {
    type: actionTypes.SET_HOST_DESCRIPTION_BLURRED,
  };
}

export const setHostInterests= (interests) => {
  return {
    type: actionTypes.SET_HOST_INTERESTS,
    interests
  };
}

export const setHostInterestsBlurred = () => {
  return {
    type: actionTypes.SET_HOST_INTERESTS_BLURRED,
  };
}
