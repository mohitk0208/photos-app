import { createContext, useContext, useState, useEffect, useCallback } from "react"

const SavedPhotosContext = createContext()

export const useSavedPhotos = () => {
  const context = useContext(SavedPhotosContext)
  if (context === undefined) {
    throw new Error("useSavedPhotos must be used within a SavedPhotosProvider")
  }
  return context
}


const SavedPhotosContextProvider = ({ children }) => {

  const [data, setData] = useState(null)
  const [savedIds, setSavedIds] = useState([])
  const [photos, setPhotos] = useState([])

  const addToSavedPhotos = useCallback((photo) => {
    const d = {
      ...data
    }

    d[photo.id] = photo

    localStorage.setItem('savedPhotos', JSON.stringify(d))
    setData(d)
    setSavedIds(Object.keys(d))
    setPhotos(Object.values(d))
  }, [])




  const removeFromSavedPhotos = useCallback((photo) => {
    console.log('removing from saved photos')


    const { [photo.id]: _, ...d } = data

    localStorage.setItem('savedPhotos', JSON.stringify(d))
    setData(d)
    setSavedIds(Object.keys(d))
    setPhotos(Object.values(d))
  }, [])



  useEffect(() => {
    const localStorageData = localStorage.getItem("savedPhotos")
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData)

      console.log('parsed data', parsedData)
      setData(parsedData)
      setSavedIds(prev => Object.keys(parsedData))
      setPhotos(Object.values(parsedData))
    }

  }, [])

  const value = {
    data,
    savedIds,
    photos,
    addToSavedPhotos,
    removeFromSavedPhotos,
  }

  return (
    <SavedPhotosContext.Provider value={value}>
      {children}
    </SavedPhotosContext.Provider>
  )
}

export default SavedPhotosContextProvider;