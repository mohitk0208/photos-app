import { useSavedPhotos } from "../../context/SavedPhotosContext"
import { BookmarkIcon } from "@heroicons/react/outline"


const Photo = ({ photo, onClick }) => {

  const { savedIds, addToSavedPhotos, removeFromSavedPhotos } = useSavedPhotos()


  const handleBookmarkClick = (e) => {
    e.stopPropagation()
    if (savedIds.includes(photo.id)) {
      removeFromSavedPhotos(photo.id)
    } else {
      addToSavedPhotos(photo)
    }
  }


  return (
    <div className="w-full aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden relative" onClick={onClick} >
      <img className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out object-cover" src={photo.urls.regular} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" ></div>

      <BookmarkIcon className={`w-6 h-6 ${savedIds.includes(photo.id) ? " fill-yellow-500" : "fill-transparent"} stroke-1 absolute bottom-1 right-1`} onClick={handleBookmarkClick} />

    </div>
  )
}


export default Photo;