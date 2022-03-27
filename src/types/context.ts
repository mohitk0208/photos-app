import { PhotoType } from "./photo"

export interface RandomPhotosDataType {
  date: Date;
  photos: PhotoType[];
}

export type setLocalStorageDataType = (photo: PhotoType | PhotoType[]) => void;

export interface randomPhotosContext {
  data: RandomPhotosDataType | null;
  setLocalStorageData: setLocalStorageDataType;
}


export interface savedPhotosDataType {
  photos: PhotoType[];
}

export interface savedPhotosContext {
  data: savedPhotosDataType | null;
  addPhoto: (photo: PhotoType) => void;
  removePhoto: (photoId: string) => void;
  isPhotoSaved: (photoId: string) => boolean;
}


export const randomPhotosCountTypes = [5, 10, 15, 20, 25, 30] as const
export const randomPhotoOrientationTypes = ['landscape', 'portrait', 'squarish'] as const

export interface SettingsType {
  isDarkMode: boolean;
  randomPhotosCount: typeof randomPhotosCountTypes[number];
  randomPhotoOrientation?: typeof randomPhotoOrientationTypes[number];
}

export type setIsDarkModeType = (isDarkMode: boolean) => void;
export type setRandomPhotosCountType = (randomPhotosCount: typeof randomPhotosCountTypes[number]) => void;
export type setRandomPhotosOrientationType = (randomPhotoOrientation: typeof randomPhotoOrientationTypes[number]) => void;
export interface settingsContext {
  settings: SettingsType;
  setIsDarkMode: setIsDarkModeType;
  setRandomPhotosCount: setRandomPhotosCountType;
  setRandomPhotosOrientation: setRandomPhotosOrientationType
}