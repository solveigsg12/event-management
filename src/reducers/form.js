import * as types from "../actions/actionTypes";
import { fromJS } from "immutable";
import { createReducer } from "redux-immutablejs";

const initialState = fromJS({
  signupType: null,
  hostName: null,
  hostAge: null,
  hostSex: null,
  hostAddress: null,
  hostEmail: null,
  hostNumber: null,
  hostDescription: null,
  hostInterests: null,
  audienceName: null,
  audienceAge: null,
  audienceSex: null,
  audienceAddress: null,
  audienceEmail: null,
  audienceNumber: null
});

export default createReducer(initialState, {
  [types.SET_SIGNUP_TYPE]: (state, { signupType }) => {
    return state.set("signupType", signupType);
  },

  [types.SET_HOST_NAME]: (state, { name }) => {
    return state.set("hostName", name);
  },

  [types.SET_HOST_AGE]: (state, { age }) => {
    return state.set("hostAge", age);
  },

  [types.SET_HOST_SEX]: (state, { sex }) => {
    return state.set("hostSex", sex);
  },

  [types.SET_HOST_ADDRESS]: (state, { address }) => {
    return state.set("hostAddress", address);
  },

  [types.SET_HOST_EMAIL]: (state, { email }) => {
    return state.set("hostEmail", email);
  },

  [types.SET_HOST_PHONENUMBER]: (state, { number }) => {
    return state.set("hostNumber", number);
  },

  [types.SET_HOST_DESCRIPTION]: (state, { description }) => {
    return state.set("hostDescription", description);
  },

  [types.SET_HOST_INTERESTS]: (state, { interests }) => {
    return state.set("hostInterests", interests);
  },

  [types.SET_AUDIENCE_NAME]: (state, { name }) => {
    return state.set("audienceName", name);
  },

  [types.SET_AUDIENCE_AGE]: (state, { age }) => {
    return state.set("audienceAge", age);
  },

  [types.SET_AUDIENCE_SEX]: (state, { sex }) => {
    return state.set("audienceSex", sex);
  },

  [types.SET_AUDIENCE_ADDRESS]: (state, { address }) => {
    return state.set("audienceAddress", address);
  },

  [types.SET_AUDIENCE_EMAIL]: (state, { email }) => {
    return state.set("audienceEmail", email);
  },

  [types.SET_AUDIENCE_PHONENUMBER]: (state, { number }) => {
    return state.set("audienceNumber", number);
  },
  
});
