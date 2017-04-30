import {Map, Set} from 'immutable';
import {createReducer} from 'redux-immutablejs';
import constants from '../constants/actionTypes';

const initialState = Map({
  name: null,
});

export default createReducer(initialState, {
  [constants.PERFORMER_FORM.SET_NAME]: (state, {name}) => {
    return state.set('name', name);
  },
});
