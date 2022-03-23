import { Tab } from "@headlessui/react"
import HomePage from "../HomePage"
import SearchPage from "../SearchPage"
import SavedPage from "../SavedPage"
import { HomeIcon, SearchIcon, BookmarkIcon } from "@heroicons/react/solid"


interface CustomTabProps {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  name: string;
}

const CustomTab = ({ Icon, name }: CustomTabProps) => {
  return (
    <Tab>
      {({ selected }) => (
        <div className={`group cursor-pointer`}>
          <Icon className={`w-20 aspect-square ${selected ? "text-gray-700" : "text-gray-500"}  block px-2 py-0 group-hover:text-gray-600 transition-colors duration-150 ease-in-out`} />
          <p className={`text-sm ${selected ? "text-gray-800" : "text-gray-700"}  group-hover:text-gray-800 transition-colors duration-150 ease-in-out`} >{name}</p>
        </div>
      )}
    </Tab>
  )
}

const TabsContainer = () => {

  return (
    <div>
      <Tab.Group as="div" >
        <Tab.List as="div" className=" w-full p-10 flex items-center justify-center gap-2 bg-gray-200 " >
          <CustomTab Icon={HomeIcon} name="Home" />
          <CustomTab Icon={SearchIcon} name="Search" />
          <CustomTab Icon={BookmarkIcon} name="Saved" />
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

