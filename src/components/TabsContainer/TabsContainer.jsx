import { Tab } from "@headlessui/react"
import HomePage from "../HomePage"
import SearchPage from "../SearchPage"
import SavedPage from "../SavedPage"
import { HomeIcon, SearchIcon, BookmarkIcon } from "@heroicons/react/solid"

const TabsContainer = () => {

  return (
    <div>
      <Tab.Group as="div" >
        <Tab.List as="div" className=" w-full p-10 flex items-center justify-center gap-2 bg-gray-200 " >
          <Tab>
            <div>
              <HomeIcon className="w-20 aspect-square text-gray-500 block p-2" />
              <p>Home</p>
            </div>
          </Tab>
          <Tab>
            <div>
              <SearchIcon className="w-20 aspect-square text-gray-500 block p-2" />
              <p>Search</p>
            </div>
          </Tab>
          <Tab>
            <div>
              <BookmarkIcon className="w-20 aspect-square text-gray-500 block p-2" />
              <p>Saved</p>
            </div>
          </Tab>
        </Tab.List>

        <Tab.Panels as="div" className="px-10 py-5 bg-gray-50 w-full h-full">
          <Tab.Panel className="">
            <HomePage />
          </Tab.Panel>
          <Tab.Panel className="">
            <SearchPage />
          </Tab.Panel>
          <Tab.Panel className="">
            <SavedPage />
          </Tab.Panel>
        </Tab.Panels>

      </Tab.Group>
    </div>

  )

}

export default TabsContainer

