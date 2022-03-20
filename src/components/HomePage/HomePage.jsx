import PhotosContainer from "../PhotosContainer"

const HomePage = () => {
  return (
    <div className="" >
      <h1 >Today's 30  {import.meta.env.VITE_UNSPLASH_SECRET_KEY}</h1>
      <PhotosContainer />
    </div>
  )

}


export default HomePage