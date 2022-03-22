import TabsContainer from "./components/TabsContainer"
import RandomPhotosContextProvider from "./context/RandomPhotosContext"

function App() {

  return (
    <RandomPhotosContextProvider >
      <div className="">
        <TabsContainer />
      </div>
    </RandomPhotosContextProvider>
  )
}

export default App
