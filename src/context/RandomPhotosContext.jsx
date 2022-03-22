import { useContext, createContext, useState, useEffect, useCallback } from "react"

const RandomPhotosContext = createContext()

export const useRandomPhotosContext = () => {
  const context = useContext(RandomPhotosContext)
  if (context === undefined) {
    throw new Error('useRandomPhotosContext must be used within a RandomPhotosProvider')
  }
  return context
}



const RandomPhotosContextProvider = ({ children }) => {

  const [data, setData] = useState(null)

  const setLocalStorageData = useCallback((photos) => {
    const d = {
      date: new Date(),
      photos: photos
    }
    localStorage.setItem('randomPhotos', JSON.stringify(d))
    setData(d)
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('randomPhotos')
    if (data) {
      const parsedData = JSON.parse(data)

      if (new Date(parsedData.date).getUTCDate() === new Date().getUTCDate()) {
        setData(parsedData)
      }
    }
  }, [])

  const value = {
    data,
    setLocalStorageData
  }

  return (
    <RandomPhotosContext.Provider value={value}>
      {children}
    </RandomPhotosContext.Provider>
  )
}

export default RandomPhotosContextProvider