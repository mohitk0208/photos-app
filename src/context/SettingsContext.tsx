import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { setRandomPhotosOrientationType, setRandomPhotosCountType, settingsContext, SettingsType } from "../types/context"
import { action, ActionTypes } from "../types/settingActions"



const initialSettings: SettingsType = {
  isDarkMode: false,
  randomPhotosCount: 20,
  randomPhotoOrientation: undefined
}

const initialContext: settingsContext = {
  settings: initialSettings,
  setIsDarkMode: () => { },
  setRandomPhotosCount: () => { },
  setRandomPhotosOrientation: () => { }
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

  const [settings, dispatch] = useReducer(settingsReducer, initialContext.settings)

  const setIsDarkMode = (isDarkMode: boolean) => {
    localStorage.setItem("settings", JSON.stringify({ ...settings, isDarkMode }))
    dispatch({ type: ActionTypes.SET_DARK_MODE, payload: isDarkMode })
  }

  const setRandomPhotosCount: setRandomPhotosCountType = (randomPhotosCount) => {
    localStorage.setItem("settings", JSON.stringify({ ...settings, randomPhotosCount }))
    dispatch({ type: ActionTypes.SET_RANDOM_PHOTOS_COUNT, payload: randomPhotosCount })
  }

  const setRandomPhotosOrientation: setRandomPhotosOrientationType = (randomPhotoOrientation) => {
    localStorage.setItem("settings", JSON.stringify({ ...settings, randomPhotoOrientation }))
    dispatch({ type: ActionTypes.SET_RANDOM_PHOTO_ORIENTATION, payload: randomPhotoOrientation })
  }

  useEffect(() => {
    const settings = localStorage.getItem("settings")
    if (settings) {
      const parsedSettings = JSON.parse(settings)
      setIsDarkMode(parsedSettings.isDarkMode)
      setRandomPhotosCount(parsedSettings.randomPhotosCount)
    }
    else {
      localStorage.setItem("settings", JSON.stringify(initialContext.settings))
    }
  }, [])


  const value: settingsContext = {
    settings,
    setIsDarkMode,
    setRandomPhotosCount,
    setRandomPhotosOrientation
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider >
  )
}

export default SettingsProvider