import { useEffect, useState } from "react"
import PhotosContainer from "../PhotosContainer"
import { createApi } from "unsplash-js"
import { useRandomPhotosContext } from "../../context/RandomPhotosContext"
import { RefreshIcon } from "@heroicons/react/solid"
import { PhotoType } from "../../types/photo"

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
})


const HomePage = () => {

  const [photos, setPhotos] = useState<PhotoType[]>([])
  const [loading, setLoading] = useState(false)
  const { data, setLocalStorageData } = useRandomPhotosContext()

  useEffect(() => {

    if (data) {
      setPhotos(data.photos)

    } else {

      api.photos.getRandom({
        count: 30,
      }).then(res => {
        setLocalStorageData(res.response as PhotoType | PhotoType[] || [])
      })
    }

  }, [])

  useEffect(() => {
    if (data) setPhotos(data.photos)
  }, [data])

  const refreshClickHandler = () => {
    setLoading(true)
    api.photos.getRandom({
      count: 30,
    }).then(res => {
      setLocalStorageData(res.response as PhotoType | PhotoType[] || [])
      setLoading(false)
    })
  }


  return (
    <div className="" >
      <div className="flex justify-end">
        <button className="flex item-center justify-center gap-1 py-2 px-4 border rounded-full hover:bg-gray-200 transition-colors duration-200 ease-in-out mb-1 " disabled={loading} onClick={refreshClickHandler} >
          <span>Refresh</span>
          <RefreshIcon className="w-6 h-6 text-blue-600" />
        </button>
      </div>
      <PhotosContainer photos={photos} loading={loading} />
    </div>
  )

}


export default HomePage