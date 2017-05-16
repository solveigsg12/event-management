import * as types from '../actions/actionTypes';
import {fromJS, Map} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const initializePreviousPerformance = (img1, img2, img3) => {
  return {
    imgUrlOne: img1,
    imgUrlTwo: img2,
    imgUrlThree: img3,
  };
};

const initialState = fromJS({
  TheOcean: initializePreviousPerformance(
    require('../img/car.jpg'),
    require('../img/event1.jpeg'),
    require('../img/event3.jpg')
  ),
  TheMountain: initializePreviousPerformance(
    require('../img/event2.jpeg'),
    require('../img/event1.jpeg'),
    require('../img/event3.jpg')
  ),
  TheCar: initializePreviousPerformance(
    require('../img/event2.jpeg'),
    require('../img/event1.jpeg'),
    require('../img/event3.jpg')
  ),
});

export default createReducer(initialState, {
  [types.SET_PREVIOUS_PERFORMANCE]: (state, {name, img1, img2, img3}) => {
    return state
      .setIn([name, 'imgUrlOne'], img1)
      .setIn([name, 'imgUrlTwo'], img2)
      .setIn([name, 'imgUrlThree'], img3);
  },
});
