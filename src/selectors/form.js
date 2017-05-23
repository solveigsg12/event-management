import {Map, fromJS} from 'immutable';

export const isFormValid = state => {
  const signupType = state.form.get('signupType');
  const form = signupType == 'host' ? state.hostForm : state.audienceForm;
  return !form.some(information => {
    if (!Map.isMap(information)) {
      return false;
    }
    return (
      information.toJS().errors !== null || information.toJS().value === ''
    );
  });
};
