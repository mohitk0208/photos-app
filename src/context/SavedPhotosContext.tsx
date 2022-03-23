import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { savedPhotosContext, savedPhotosDataType } from "../types/context"
import { PhotoType } from "../types/photo"

const SavedPhotosContext = createContext<savedPhotosContext>({ data: null, addPhoto: () => { }, removePhoto: () => { }, isPhotoSaved: () => false })

export const useSavedPhotos = () => {
  const context = useContext(SavedPhotosContext)
  if (context === undefined) {
    throw new Error("useSavedPhotos must be used within a SavedPhotosProvider")
  }
  return context
}


const SavedPhotosContextProvider = ({ children }: { children: ReactNode }) => {

  const [data, setData] = useState<savedPhotosDataType | null>(null)

  useEffect(() => {

    const localStorageData = localStorage.getItem("savedPhotos")

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData) as savedPhotosDataType
      setData(parsedData)
    }

  }, [])


  const addPhoto = useCallback((photo: PhotoType) => {

    if (!data) {
      setData({ photos: [photo] })
      localStorage.setItem("savedPhotos", JSON.stringify({ photos: [photo] }))
    } else {
      setData({ photos: [...data.photos, photo] })
      localStorage.setItem("savedPhotos", JSON.stringify({ photos: [...data.photos, photo] }))
    }

  }, [data])


  const removePhoto = useCallback((photoId: string) => {

    if (!data) {
      return
    }

    const newPhotos = data.photos.filter(photo => photo.id !== photoId)

    setData({ photos: newPhotos })
    localStorage.setItem("savedPhotos", JSON.stringify({ photos: newPhotos }))

  }, [data])



  const isPhotoSaved = useCallback((photoId: string) => {

    if (!data) {
      return false
    }

    return data.photos.some(photo => photo.id === photoId)

  }, [data])




  const value: savedPhotosContext = {
    data,
    addPhoto,
    removePhoto,
    isPhotoSaved
  }

  return (
    <SavedPhotosContext.Provider value={value}>
      {children}
    </SavedPhotosContext.Provider>
  )
}

export default SavedPhotosContextProvider;