import * as types from '../actions/actionTypes';
import {fromJS, Map, List} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const initializePreviousPerformance = (performance, imageList, text) => {
  return {
    performance: performance,
    images: imageList,
    text: text,
  };
};

const initialState = fromJS({
  Tara: initializePreviousPerformance(
    'previous',
    List([
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
    ]),
    null
  ),
  Pauli: initializePreviousPerformance(
    'upcoming',
    null,
    'Pauli is a danish musician, playing with his band in Berlin. Lasse likes to have a pint of beer instead of a meal every now and then.'
  ),
  Niels: initializePreviousPerformance(
    'upcoming',
    null,
    'Niels is a german dj, who does not like clubbing. He likes to drinks so many cups of coffee that he get anxiety, and then uses that high to create music.'
  ),
  NastasiaAndStephen: initializePreviousPerformance(
    'upcoming',
    null,
    'Nastasia is a circus performer from France and Stephen is a musician from canada. Every morning they do stretches together. '
  ),
  Asanda: initializePreviousPerformance(
    'upcoming',
    null,
    'Asanda is a south African music lover, dj and an entrepreneur living in Berlin.'
  ),
});

export default createReducer(initialState, {
  [types.SET_PREVIOUS_PERFORMANCE]: (state, {name, images}) => {
    return state.set(name, List(images));
  },
});
