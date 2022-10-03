import { useEffect, useState } from "react"
import PhotosContainer from "../PhotosContainer"
import { createApi } from "unsplash-js"
import { useRandomPhotosContext } from "../../context/RandomPhotosContext"
import { RefreshIcon } from "@heroicons/react/solid"
import { PhotoType } from "../../types/photo"
import { useSettings } from "../../context/SettingsContext"

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
})


const HomePage = () => {

  const [photos, setPhotos] = useState<PhotoType[]>([])
  const [loading, setLoading] = useState(false)
  const { data, setLocalStorageData } = useRandomPhotosContext()
  const { settings } = useSettings()

  useEffect(() => {

    if (data) {
      setPhotos(data.photos)

    } else {
      getNewRandomPhotos()
    }

  }, [])

  useEffect(() => {
    if (data) setPhotos(data.photos)
  }, [data])

  const getNewRandomPhotos = () => {
    setLoading(true)
    api.photos.getRandom({
      count: settings.randomPhotosCount,
      orientation: settings.randomPhotoOrientation,
    }).then(res => {
      setLocalStorageData(res.response as PhotoType | PhotoType[] || [])
      setLoading(false)
    })
  }


  return (
    <div className="" >
      <div className="flex justify-end">
        <button className="flex item-center justify-center gap-1 py-2 px-4 mb-5 border rounded-full hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600  dark:text-lime-500 tracking-wide transition-colors duration-200 ease-in-out " disabled={loading} onClick={getNewRandomPhotos} >
          <span>Refresh</span>
          <RefreshIcon className="w-5 h-5 text-blue-600 dark:text-lime-500 " />
        </button>
      </div>
      <PhotosContainer photos={photos} loading={loading} />
    </div>
  )

}


export default HomePage