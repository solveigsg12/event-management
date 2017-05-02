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
