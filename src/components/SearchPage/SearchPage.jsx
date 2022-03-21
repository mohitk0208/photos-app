import { useState } from "react"
import { createApi } from "unsplash-js";
import useDebounceTimeout from "../../hooks/useDebounceTimeout";
import PhotosContainer from "../PhotosContainer";

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
})

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useDebounceTimeout(() => {

    api.search.getPhotos({
      query: searchTerm,
      per_page: 30,
    }).then(res => {
      setSearchResults(res.response.results);
    })

  }, 500, [searchTerm]);

  return (
    <div>
      <div className={`flex gap-2 items-center justify-center pb-5 `}>
        <input type="text" className={` px-4 py-3 rounded-full border w-96 outline-none`} placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="button" className={`px-5 py-3 rounded-full outline-none border bg-white`} onClick={() => null} > Search</button>
      </div>
      <PhotosContainer photos={searchResults} />
    </div>

  )
}


export default SearchPage;