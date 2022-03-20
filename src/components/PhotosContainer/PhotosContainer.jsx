const PhotosContainer = () => {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center" >
      {Array(10).fill(0).map((_, index) => (
        <div className="w-80 aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden" key={index} >
          <img className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out" src="https://picsum.photos/400" alt="" />
        </div>
      )
      )}
    </div>
  )
}

export default PhotosContainer