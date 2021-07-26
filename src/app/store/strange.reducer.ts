import { Action } from '@ngrx/store';
import { ActionTypes } from './strange.actions';

export interface DataState {
  first: number;
  second: number;
}

const initialState: DataState = {
  first: -5,
  second: 10
};

export function strangeReducer(state = initialState, action: Action): DataState {
  let newState = { ...state };
  switch (action.type) {
    case ActionTypes.Increase:
      newState.first++;
      break;
    case ActionTypes.Decrease:
      newState.second--;
      break;
    case ActionTypes.Reset:
      newState = { ...initialState };
      break;
    case ActionTypes.Change:
      break;
    default:
      break;
  }
  return newState;
}
