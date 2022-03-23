import { useContext, createContext, useState, useEffect, useCallback, ReactNode } from "react"
import { randomPhotosContext, RandomPhotosDataType, setLocalStorageDataType } from "../types/context"

const RandomPhotosContext = createContext<randomPhotosContext>({ data: null, setLocalStorageData: () => { } })

export const useRandomPhotosContext = () => {
  const context = useContext(RandomPhotosContext)
  if (context === undefined) {
    throw new Error('useRandomPhotosContext must be used within a RandomPhotosProvider')
  }
  return context
}



const RandomPhotosContextProvider = ({ children }: { children: ReactNode }) => {

  const [data, setData] = useState<RandomPhotosDataType | null>(null)

  const setLocalStorageData: setLocalStorageDataType = (photos) => {
    const d = {
      date: new Date(),
      photos: Array.isArray(photos) ? photos : [photos]
    }
    localStorage.setItem('randomPhotos', JSON.stringify(d))
    setData(d)
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem('randomPhotos')
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData)

      if (new Date(parsedData.date).getUTCDate() === new Date().getUTCDate()) {
        setData(parsedData)
      }
    }
  }, [])

  const value: randomPhotosContext = {
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