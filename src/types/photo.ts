import { Random, Basic } from "unsplash-js/dist/methods/photos/types"

export interface PhotoType extends Random { }
export interface PhotoBasicType extends Basic { }

export type UrlTypes = "full" | "raw" | "regular" | "small" | "thumb";