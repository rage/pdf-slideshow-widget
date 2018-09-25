// @flow

import { combineReducers } from 'redux';

import slideshowReducer from 'reducers/slideshow-reducer';
import type { State as SlideshowState } from 'reducers/slideshow';

/* eslint-disable no-use-before-define */
export type ThunkAction = (dispatch: Dispatch, getState: GetState, arguments: ThunkArguments) => any;
/* eslint-enable no-use-before-define */
export type Action = { type: string, payload?: any } | ThunkAction | Promise<any>;

export type State = {
  codeStatesReducer: SlideshowState,
}
export type Dispatch = (action: Action) => any;

export type ThunkArguments = {
};

export type GetState = () => State;

export default function reducerCreator(_input: string) {
  return combineReducers({
    slideshow: slideshowReducer,
  });
}
