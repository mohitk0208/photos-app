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