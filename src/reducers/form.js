import * as types from "../actions/actionTypes";
import { fromJS } from "immutable";
import { createReducer } from "redux-immutablejs";

const initialState = fromJS({
  signupType: null,
});

export default createReducer(initialState, {
  [types.SET_SIGNUP_TYPE]: (state, { signupType }) => {
    return state.set("signupType", signupType);
  },
});
