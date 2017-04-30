/* @flow */
import type {Action} from '../models/redux';

export function setName(name: string): Action {
  return {type: SET_NAME, name};
}
