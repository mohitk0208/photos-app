import { useSavedPhotos } from "../../context/SavedPhotosContext"
import { BookmarkIcon } from "@heroicons/react/outline"
import { PhotoBasicType, PhotoType } from '../../types/photo'


interface PhotoProps {
  onClick: () => void,
  photo: PhotoType | PhotoBasicType
}

const Photo = ({ photo, onClick }: PhotoProps) => {

  const { addPhoto, removePhoto, isPhotoSaved } = useSavedPhotos()

  const handleBookmarkClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation()
    if (isPhotoSaved(photo.id)) {
      removePhoto(photo.id)
    } else {
      addPhoto(photo as PhotoType)
    }
  }



  return (
    <div className="w-full aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden relative" onClick={onClick} >
      <img className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out object-cover" src={photo.urls.regular} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" ></div>

      <BookmarkIcon className={`w-6 h-6 ${isPhotoSaved(photo.id) ? " fill-yellow-500 stroke-black" : "fill-transparent stroke-slate-50"} stroke-1  absolute bottom-1 right-1`} onClick={handleBookmarkClick} />
    </div>
  )
}


export default Photo;