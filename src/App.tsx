import TabsContainer from "./components/TabsContainer"
import RandomPhotosContextProvider from "./context/RandomPhotosContext"
import SavedPhotosContextProvider from "./context/SavedPhotosContext"
import SettingsProvider from "./context/SettingsContext"

function App() {

  return (
    <SettingsProvider>
      <SavedPhotosContextProvider>
        <RandomPhotosContextProvider >
          <div className="">
            <TabsContainer />
          </div>
        </RandomPhotosContextProvider>
      </SavedPhotosContextProvider>
    </SettingsProvider>
  )
}

export default App
