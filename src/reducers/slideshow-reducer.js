// @flow
import { createReducer } from 'redux-create-reducer';
import { CHANGE_SLIDE } from 'state/actions';
import type { ChangeSlideAction } from 'state/actions';

export type State = {
  currentSlide: number
};

const initialState = {
  currentSlide: 1,
};

export default createReducer(initialState, {
  [CHANGE_SLIDE](state: State, action: ChangeSlideAction): State {
    return { ...state, ...{ currentSlide: action.toSlide } };
  },
});
