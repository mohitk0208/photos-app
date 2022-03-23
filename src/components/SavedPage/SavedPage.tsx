import PhotosContainer from "../PhotosContainer"
import { useSavedPhotos } from "../../context/SavedPhotosContext"


const SavedPage = () => {
  const { data } = useSavedPhotos()


  return (
    <div className="" >
      <PhotosContainer photos={data?.photos || []} loading={false} />
    </div>
  )
}

export default SavedPage;