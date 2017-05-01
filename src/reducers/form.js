import * as types from "../actions/actionTypes";
import { fromJS } from "immutable";
import { createReducer } from "redux-immutablejs";

const initializeField = required => {
  return {
    value: "",
    blurred: false,
    errors: null
  };
};

const initialState = fromJS({
  signupType: initializeField(),
  hostName: initializeField(),
  hostAge: initializeField(),
  hostSex: initializeField(),
  hostAddress: initializeField(),
  hostEmail: initializeField(),
  hostNumber: initializeField(),
  hostDescription: initializeField(),
  hostInterests: initializeField(),
  audienceName: initializeField(),
  audienceAge: initializeField(),
  audienceSex: initializeField(),
  audienceAddress: initializeField(),
  audienceEmail: initializeField(),
  audienceNumber: initializeField()
});

function validate(currentState, value, errorMessage) {
  if (!currentState.getIn([value, "value"], "")) {
    return fromJS([
      {
        error: errorMessage
      }
    ]);
  }
  return null;
}

export default createReducer(initialState, {
  [types.SET_SIGNUP_TYPE]: (state, { signupType }) => {
    return state.set("signupType", signupType);
  },

  [types.SET_HOST_NAME]: (state, { name }) => {
    return state
      .setIn(["hostName", "value"], name)
      .setIn(["hostName", "blurred"], false)
      .setIn(["hostName", "errors"], null);
  },

  [types.SET_HOST_NAME_BLURRED]: state => {
    return state
      .setIn(["hostName", "blurred"], true)
      .setIn(
        ["hostName", "errors"],
        validate(state, "hostName", "Name is required")
      );
  },

  [types.SET_HOST_AGE]: (state, { age }) => {
    return state
      .setIn(["hostAge", "value"], age)
      .setIn(["hostAge", "blurred"], false)
      .setIn(["hostAge", "errors"], null);
  },

  [types.SET_HOST_AGE_BLURRED]: state => {
    return state
      .setIn(["hostAge", "blurred"], true)
      .setIn(
        ["hostAge", "errors"],
        validate(state, "hostAge", "Age is required")
      );
  },

  [types.SET_HOST_SEX]: (state, { sex }) => {
    return state
      .setIn(["hostSex", "value"], sex)
      .setIn(["hostSex", "blurred"], false)
      .setIn(["hostSex", "errors"], null);
  },

  [types.SET_HOST_SEX_BLURRED]: state => {
    return state
      .setIn(["hostSex", "blurred"], true)
      .setIn(
        ["hostSex", "errors"],
        validate(state, "hostSex", "Sex is required")
      );
  },

  [types.SET_HOST_ADDRESS]: (state, { address }) => {
    return state
      .setIn(["hostAddress", "value"], address)
      .setIn(["hostAddress", "blurred"], false)
      .setIn(["hostAddress", "errors"], null);
  },

  [types.SET_HOST_ADDRESS_BLURRED]: state => {
    return state
      .setIn(["hostAddress", "blurred"], true)
      .setIn(
        ["hostAddress", "errors"],
        validate(state, "hostAddress", "Address is required")
      );
  },

  [types.SET_HOST_EMAIL]: (state, { email }) => {
    return state
      .setIn(["hostEmail", "value"], email)
      .setIn(["hostEmail", "blurred"], false)
      .setIn(["hostEmail", "errors"], null);
  },

  [types.SET_HOST_EMAIL_BLURRED]: state => {
    return state
      .setIn(["hostEmail", "blurred"], true)
      .setIn(
        ["hostEmail", "errors"],
        validate(state, "hostEmail", "Email is required")
      );
  },

  [types.SET_HOST_PHONENUMBER]: (state, { number }) => {
    return state
      .setIn(["hostNumber", "value"], number)
      .setIn(["hostNumber", "blurred"], false)
      .setIn(["hostNumber", "errors"], null);
  },

  [types.SET_HOST_PHONENUMBER_BLURRED]: state => {
    return state
      .setIn(["hostNumber", "blurred"], true)
      .setIn(
        ["hostNumber", "errors"],
        validate(state, "hostNumber", "Phone number is required")
      );
  },

  [types.SET_HOST_DESCRIPTION]: (state, { description }) => {
    return state
      .setIn(["hostDescription", "value"], description)
      .setIn(["hostDescription", "blurred"], false)
      .setIn(["hostDescription", "errors"], null);
  },

  [types.SET_HOST_DESCRIPTION_BLURRED]: state => {
    return state
      .setIn(["hostDescription", "blurred"], true)
      .setIn(
        ["hostDescription", "errors"],
        validate(state, "hostDescription", "Field is required")
      );
  },

  [types.SET_HOST_INTERESTS]: (state, { interests }) => {
    return state
      .setIn(["hostInterests", "value"], interests)
      .setIn(["hostInterests", "blurred"], false)
      .setIn(["hostInterests", "errors"], null);
  },

  [types.SET_HOST_INTERESTS_BLURRED]: state => {
    return state
      .setIn(["hostInterests", "blurred"], true)
      .setIn(
        ["hostInterests", "errors"],
        validate(state, "hostInterests", "Field is required")
      );
  },

  [types.SET_AUDIENCE_NAME]: (state, { name }) => {
    return state
      .setIn(["audienceName", "value"], name)
      .setIn(["audienceName", "blurred"], false)
      .setIn(["audienceName", "errors"], null);
  },

  [types.SET_AUDIENCE_NAME_BLURRED]: state => {
    return state
      .setIn(["audienceName", "blurred"], true)
      .setIn(
        ["audienceName", "errors"],
        validate(state, "audienceName", "Name is required")
      );
  },

  [types.SET_AUDIENCE_AGE]: (state, { age }) => {
    return state
      .setIn(["audienceAge", "value"], age)
      .setIn(["audienceAge", "blurred"], false)
      .setIn(["audienceAge", "errors"], null);
  },

  [types.SET_AUDIENCE_AGE_BLURRED]: state => {
    return state
      .setIn(["audienceAge", "blurred"], true)
      .setIn(
        ["audienceAge", "errors"],
        validate(state, "audienceAge", "Age is required")
      );
  },

  [types.SET_AUDIENCE_SEX]: (state, { sex }) => {
    return state
      .setIn(["audienceSex", "value"], sex)
      .setIn(["audienceSex", "blurred"], false)
      .setIn(["audienceSex", "errors"], null);
  },

  [types.SET_AUDIENCE_SEX_BLURRED]: state => {
    return state
      .setIn(["audienceSex", "blurred"], true)
      .setIn(
        ["audienceSex", "errors"],
        validate(state, "audienceSex", "Sex is required")
      );
  },

  [types.SET_AUDIENCE_ADDRESS]: (state, { address }) => {
    return state
      .setIn(["audienceAddress", "value"], address)
      .setIn(["audienceAddress", "blurred"], false)
      .setIn(["audienceAddress", "errors"], null);
  },

  [types.SET_AUDIENCE_ADDRESS_BLURRED]: state => {
    return state
      .setIn(["audienceAddress", "blurred"], true)
      .setIn(
        ["audienceAddress", "errors"],
        validate(state, "audienceAddress", "Address is required")
      );
  },

  [types.SET_AUDIENCE_EMAIL]: (state, { email }) => {
    return state
      .setIn(["audienceEmail", "value"], email)
      .setIn(["audienceEmail", "blurred"], false)
      .setIn(["audienceEmail", "errors"], null);
  },

  [types.SET_AUDIENCE_EMAIL_BLURRED]: state => {
    return state
      .setIn(["audienceEmail", "blurred"], true)
      .setIn(
        ["audienceEmail", "errors"],
        validate(state, "audienceEmail", "Email is required")
      );
  },

  [types.SET_AUDIENCE_PHONENUMBER]: (state, { number }) => {
    return state
      .setIn(["audienceNumber", "value"], number)
      .setIn(["audienceNumber", "blurred"], false)
      .setIn(["audienceNumber", "errors"], null);
  },

  [types.SET_AUDIENCE_PHONENUMBER_BLURRED]: state => {
    return state
      .setIn(["audienceNumber", "blurred"], true)
      .setIn(
        ["audienceNumber", "errors"],
        validate(state, "audienceNumber", "Phone number is required")
      );
  }
});
