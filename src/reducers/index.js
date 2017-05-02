import form from './form.js';
import hostForm from './hostForm.js';
import audienceForm from './audienceForm.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  form,
  hostForm,
  audienceForm,
});

export default rootReducer;
