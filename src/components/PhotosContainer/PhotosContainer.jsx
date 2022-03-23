import { useState } from "react"
import PhotoModal from "../PhotoModal/PhotoModal"
import Photo from "./Photo"

const PhotosContainer = ({ photos, loading }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1)




  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2" >
      {loading ? (
        Array(30).fill(0).map((_, index) => (
          <div className="w-full aspect-square bg-gray-400 animate-pulse" key={index}>
          </div>
        ))
      ) : (
        photos.map((photo, index) => (
          <Photo photo={photo} onClick={() => setCurrentImageIndex(index)} key={photo.id} />
        ))
      )
      }

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