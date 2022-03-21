const PhotosContainer = ({ photos }) => {


  return (
    <div className="flex gap-4 flex-wrap items-center justify-center" >
      {photos.map((photo, index) => (
        <div className="w-80 aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden" key={index} >
          <img className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out object-cover" src={photo.urls.regular} alt="" />
        </div>
      )
      )}
    </div>
  )
}

export default PhotosContainer