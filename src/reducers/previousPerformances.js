import * as types from '../actions/actionTypes';
import {fromJS, Map, List} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const initializePreviousPerformance = (performance, imageList) => {
  return {
    performance: performance,
    images: imageList,
  };
};

const initialState = fromJS({
  Tara: initializePreviousPerformance(
    'previous',
    List([
      require('../img/tara1.png'),
      require('../img/tara2.png'),
      require('../img/tara3.png'),
      require('../img/tara4.png'),
      require('../img/tara5.png'),
      require('../img/tara6.png'),
      require('../img/tara7.png'),
      require('../img/tara8.png'),
      require('../img/tara9.png'),
      require('../img/tara10.png'),
      require('../img/tara11.png'),
      require('../img/tara12.png'),
      require('../img/tara13.png'),
      require('../img/tara14.png'),
      require('../img/tara15.png'),
      require('../img/tara16.png'),
      require('../img/tara17.png'),
      require('../img/tara18.png'),
      require('../img/tara19.png'),
    ])
  ),
  Pauli: initializePreviousPerformance(
    'upcoming',
    List([
      require('../img/event2.jpeg'),
      require('../img/event1.jpeg'),
      require('../img/event3.jpg'),
    ])
  ),
  Niels: initializePreviousPerformance(
    'upcoming',
    List([
      require('../img/event2.jpeg'),
      require('../img/event1.jpeg'),
      require('../img/event3.jpg'),
    ])
  ),
  NastasiaAndStephen: initializePreviousPerformance(
    'upcoming',
    List([
      require('../img/event2.jpeg'),
      require('../img/event1.jpeg'),
      require('../img/event3.jpg'),
    ])
  ),
  Asanda: initializePreviousPerformance(
    'upcoming',
    List([
      require('../img/event2.jpeg'),
      require('../img/event1.jpeg'),
      require('../img/event3.jpg'),
    ])
  ),
});

export default createReducer(initialState, {
  [types.SET_PREVIOUS_PERFORMANCE]: (state, {name, images}) => {
    return state.set(name, List(images));
  },
});
