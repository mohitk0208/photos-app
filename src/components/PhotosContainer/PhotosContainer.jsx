import { useState } from "react"
import PhotoModal from "../PhotoModal/PhotoModal"

const PhotosContainer = ({ photos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1)




  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2" >
      {photos.map((photo, index) => (
        <div className="w-full aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden" key={index} onClick={() => setCurrentImageIndex(index)} >
          <img className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out object-cover" src={photo.urls.regular} alt="" />
        </div>
      )
      )}

      {currentImageIndex !== -1 && (
        <PhotoModal
          show={currentImageIndex !== -1}
          onClose={() => setCurrentImageIndex(-1)}
          currentImgUrl={photos[currentImageIndex].urls.regular}
          onNextClick={() => {
            if (currentImageIndex === photos.length - 1) {
              setCurrentImageIndex(0)
            } else {
              setCurrentImageIndex(currentImageIndex + 1)
            }
          }}
          onPrevClick={() => {
            if (currentImageIndex === 0) {
              setCurrentImageIndex(photos.length - 1)
            } else {
              setCurrentImageIndex(currentImageIndex - 1)
            }
          }}
        />
      )}

    </div>
  )
}

export default PhotosContainer