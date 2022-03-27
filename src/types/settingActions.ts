import { randomPhotoOrientationTypes, randomPhotosCountTypes } from "./context";

export enum ActionTypes {
  SET_DARK_MODE,
  SET_RANDOM_PHOTOS_COUNT,
  SET_RANDOM_PHOTO_ORIENTATION
}

export type setIsDarkModeAction = {
  type: ActionTypes.SET_DARK_MODE;
  payload: boolean;
}

export type setRandomPhotosCountAction = {
  type: ActionTypes.SET_RANDOM_PHOTOS_COUNT;
  payload: typeof randomPhotosCountTypes[number];
}


export type setRandomPhotosOrientation = {
  type: ActionTypes.SET_RANDOM_PHOTO_ORIENTATION;
  payload?: typeof randomPhotoOrientationTypes[number];
}

export type action = setIsDarkModeAction | setRandomPhotosCountAction | setRandomPhotosOrientation;


