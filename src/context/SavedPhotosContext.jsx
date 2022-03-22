import { createContext, useContext, useState, useEffect, useCallback } from "react"

const SavedPhotosContext = createContext()

const useSavedPhotos = () => {
  const context = useContext(SavedPhotosContext)
  if (context === undefined) {
    throw new Error("useSavedPhotos must be used within a SavedPhotosProvider")
  }
  return context
}


const SavedPhotosContextProvider = ({ children }) => {

  const [data, setData] = useState(null)
  const [savedIds, setSavedIds] = useState(new Set())


  const addToSavedPhotos = useCallback((photo) => {
    const d = {
      ...data,
      [photo.id]: photo
    }

    localStorage.setItem('savedPhotos', JSON.stringify(d))
    setData(d)
    setSavedIds(prev => {
      prev.add(photo.id)

      return prev
    })
  }, [])




  const removeFromSavedPhotos = useCallback((photo) => {
    const d = {
      ...data
    }

    delete d[photo.id]

    localStorage.setItem('savedPhotos', JSON.stringify(d))
    setData(d)
    setSavedIds(prev => {
      prev.delete(photo.id)

      return prev
    })
  }, [])



  useEffect(() => {
    const localStorageData = localStorage.getItem("savedPhotos")
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData)

      setData(parsedData)
      setSavedIds(prev => {
        const set = new Set()
        Object.keys(parsedData).forEach(key => {
          set.add(key)
        })

        return set
      })
    }

  }, [])

  const value = {
    data,
    addToSavedPhotos,
    removeFromSavedPhotos,
    savedIds
  }

  return (
    <SavedPhotosContext.Provider value={value}>
      {children}
    </SavedPhotosContext.Provider>
  )
}

export default SavedPhotosContextProvider;