import * as types from '../actions/actionTypes';
import {fromJS} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const initialState = fromJS({
  performerName: null,
  performerAge: null,
});

export default createReducer(initialState, {
  [types.SET_PERFORMER_NAME]: (state, {name}) => {
    return state.set('performerName', name);
  },

  [types.SET_PERFORMER_AGE]: (state, {age}) => {
    return state.set('performerAge', age);
  },
});
