const Photo = ({ photo, onClick }) => {
  return (
    <div className="w-full aspect-square bg-gray-400 rounded-sm cursor-pointer overflow-hidden" onClick={onClick} >
      <img className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out object-cover" src={photo.urls.regular} alt="" />
    </div>
  )
}


export default Photo;