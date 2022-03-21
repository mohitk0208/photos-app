import { useEffect, useState } from "react"
import PhotosContainer from "../PhotosContainer"
import { createApi } from "unsplash-js"

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
})


const HomePage = () => {

  const [photos, setPhotos] = useState([])



  useEffect(() => {
    api.photos.getRandom({
      count: 30,
    }).then(res => {
      setPhotos(res.response)
    })

  }, [])


  return (
    <div className="" >
      {/* <h1 >Today's 30 </h1> */}
      <PhotosContainer photos={photos} />
    </div>
  )

}


export default HomePage