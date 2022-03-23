import PhotosContainer from "../PhotosContainer"
import { useSavedPhotos } from "../../context/SavedPhotosContext"


const SavedPage = () => {
  const { data, photos, removeFromSavedPhotos } = useSavedPhotos()


  return (
    <div className="" >
      <PhotosContainer photos={photos} loading={false} />
    </div>
  )
}

export default SavedPage;