import { useSavedPhotos } from "../../context/SavedPhotosContext"
import { BookmarkIcon } from "@heroicons/react/outline"
import { PhotoBasicType, PhotoType } from '../../types/photo'
import DownloadPopover from "./DownloadPopover"


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
    <div className="w-full aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden relative group" onClick={onClick} >
      <img className="w-full h-full group-hover:scale-110 transition-transform duration-200 ease-in-out object-cover" src={photo.urls.regular} alt="" />
      <div className="flex w-full items-end justify-between px-2 gap-2 pb-2 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 " >
        <div className={`text-slate-50 text-sm items-center flex gap-2 italic`}>
          <img src={photo.user.profile_image.small} className={`rounded-full w-6 h-6`} alt={photo.user.username} />
          {photo.user.first_name}
        </div>

        <div className={`flex gap-2`} >
          <DownloadPopover photo={photo} />
          <BookmarkIcon className={`w-6 h-6 ${isPhotoSaved(photo.id) ? " fill-yellow-500 stroke-black" : "fill-transparent stroke-slate-50"} stroke-1  `} onClick={handleBookmarkClick} />
        </div>
      </div>

    </div>
  )
}


export default Photo;