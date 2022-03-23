import TabsContainer from "./components/TabsContainer"
import RandomPhotosContextProvider from "./context/RandomPhotosContext"
import SavedPhotosContextProvider from "./context/SavedPhotosContext"

function App() {

  return (
    <SavedPhotosContextProvider>
      <RandomPhotosContextProvider >
        <div className="">
          <TabsContainer />
        </div>
      </RandomPhotosContextProvider>
    </SavedPhotosContextProvider>
  )
}

export default App
