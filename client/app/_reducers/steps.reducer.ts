import {STEPS} from '../_actions/steps';

export const steps = (state: any = {}, {type, payload}) => {
  switch (type) {
    case STEPS.RESET:
      return {};
    case STEPS.SET:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
