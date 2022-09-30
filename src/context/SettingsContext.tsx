import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { setRandomPhotoOrientationType, setRandomPhotosCountType, settingsContext, SettingsType } from "../types/context"
import { action, ActionTypes } from "../types/settingActions"



const initialSettings: SettingsType = {
  randomPhotosCount: 20,
  randomPhotoOrientation: "landscape"
}

const initialContext: settingsContext = {
  settings: initialSettings,
  setRandomPhotosCount: () => { },
  setRandomPhotoOrientation: () => { }
}

const SettingsContext = createContext<settingsContext>(initialContext)

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}






const settingsReducer = (state: SettingsType, action: action) => {
  switch (action.type) {
    case ActionTypes.SET_DARK_MODE:
      return { ...state, isDarkMode: action.payload }

    case ActionTypes.SET_RANDOM_PHOTOS_COUNT:
      return { ...state, randomPhotosCount: action.payload }

    case ActionTypes.SET_RANDOM_PHOTO_ORIENTATION:
      return { ...state, randomPhotoOrientation: action.payload }

    default:
      return state

  }
}




const SettingsProvider = ({ children }: { children: ReactNode }) => {

  const [settings, dispatch] = useReducer(settingsReducer, getInitialSettings())

  const setRandomPhotosCount: setRandomPhotosCountType = (randomPhotosCount) => {
    localStorage.setItem("settings", JSON.stringify({ ...settings, randomPhotosCount }))
    dispatch({ type: ActionTypes.SET_RANDOM_PHOTOS_COUNT, payload: randomPhotosCount })
  }

  const setRandomPhotoOrientation: setRandomPhotoOrientationType = (randomPhotoOrientation) => {
    localStorage.setItem("settings", JSON.stringify({ ...settings, randomPhotoOrientation }))
    dispatch({ type: ActionTypes.SET_RANDOM_PHOTO_ORIENTATION, payload: randomPhotoOrientation })
  }

  function getInitialSettings(): SettingsType {
    const settings = localStorage.getItem("settings")
    if (settings) {
      const parsedSettings = JSON.parse(settings)
      return parsedSettings
    }
    localStorage.setItem("settings", JSON.stringify(initialSettings))
    return initialSettings
  }


  const value: settingsContext = {
    settings,
    setRandomPhotosCount,
    setRandomPhotoOrientation
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider >
  )
}

export default SettingsProvider