import { useState } from "react"
import { createApi } from "unsplash-js";
import useDebounceTimeout from "../../hooks/useDebounceTimeout";
import { PhotoBasicType } from "../../types/photo";
import PhotosContainer from "../PhotosContainer";

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
})

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<PhotoBasicType[]>([]);
  const [loading, setLoading] = useState(false);

  useDebounceTimeout(() => {
    setLoading(true);
    api.search.getPhotos({
      query: searchTerm,
      perPage: 30
    }).then(res => {
      setSearchResults(res?.response?.results as PhotoBasicType[] || []);
      setLoading(false);
    })

  }, 500, [searchTerm]);

  return (
    <div>
      <div className={`flex gap-2 items-center justify-center pb-5`}>
        <input type="text" className={`px-5 tracking-wide py-3 rounded-full border max-w-[400px] w-4/5 outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-gray-50 transition-colors duration-200 ease-in-out`} placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <PhotosContainer photos={searchResults} loading={loading} />
    </div>

  )
}


export default SearchPage;