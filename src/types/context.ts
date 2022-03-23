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
