// @flow

export const CHANGE_SLIDE = 'CHANGE_SLIDE';

export type ChangeSlideAction = {
  type: string,
  toSlide: number
};

export function changeSlideAction(toSlide: number) {
  return {
    type: CHANGE_SLIDE,
    toSlide,
  };
}
