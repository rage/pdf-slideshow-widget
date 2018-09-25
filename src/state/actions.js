// @flow

export const CHANGE_SLIDE = 'CHANGE_SLIDE';

export type ChangeSlideAction = {
  type: string,
  toSlide: number,
  currentSlide: number
};

export function changeSlideAction(toSlide: number, currentSlide: number) {
  return {
    type: CHANGE_SLIDE,
    toSlide,
    currentSlide,
  };
}
