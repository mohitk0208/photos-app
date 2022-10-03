import { useEffect } from "react"
import TabsContainer from "./components/TabsContainer"
import RandomPhotosContextProvider from "./context/RandomPhotosContext"
import SavedPhotosContextProvider from "./context/SavedPhotosContext"
import SettingsProvider from "./context/SettingsContext"

function App() {

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <SettingsProvider>
      <SavedPhotosContextProvider>
        <RandomPhotosContextProvider >
          <div className="dark:bg-slate-900">
            <TabsContainer />
          </div>
        </RandomPhotosContextProvider>
      </SavedPhotosContextProvider>
    </SettingsProvider>
  )
}

export default App
