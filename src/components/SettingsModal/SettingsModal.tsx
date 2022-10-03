import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useSettings } from "../../context/SettingsContext"
import { randomPhotoOrientationTypes, randomPhotosCountTypes } from "../../types/context"
import Select from "../utilComponents/Select"
// import DarkModeSwitch from "./DarkModeSwitch"

interface SettingsModalProps {
  show: boolean,
  className?: string,
  onClose: () => void,
}

const themeOptions = ["dark", "light"]


const SettingsModal = ({ className = "", ...props }: SettingsModalProps) => {

  const { settings, setRandomPhotosCount, setRandomPhotoOrientation } = useSettings();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "")


  return (
    <Transition show={props.show} as={Fragment} >
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={props.show}
        onClose={props.onClose}
      >
        <div className="min-h-screen text-center flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8 scale-75 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-8 sm-translate-y-0 sm:scale-95"
          >
            <div className={`transition-all transform shadow-xl rounded-lg mx-auto max-h-[90vh] w-[440px] max-w-[80vw] align-middle bg-white dark:bg-slate-800 dark:text-gray-50  `}>
              <div className="bg-white dark:bg-slate-800  px-5 py-3 rounded-lg" >
                <div className="text-left text-2xl font-bold pb-3 border-b border-lime-600 mb-2 text-lime-500 tracking-wide transition-colors duration-200 ease-in-out">
                  Settings
                </div>

                <div className="flex flex-col gap-2 p-2" >

                  <Select<string> label={"DarkMode"} value={theme} options={themeOptions} onChange={(val) => {
                    switch (val) {
                      case "dark":
                        localStorage.setItem("theme", "dark")
                        document.documentElement.classList.add("dark")
                        setTheme("dark")
                        break;
                      case "light":
                        localStorage.setItem("theme", "light")
                        document.documentElement.classList.remove("dark")
                        setTheme("light")
                        break
                    }
                  }} />

                  <Select<typeof randomPhotosCountTypes[number]> label="Random Photos Count" value={settings.randomPhotosCount} options={randomPhotosCountTypes} onChange={setRandomPhotosCount} />

                  <Select<typeof randomPhotoOrientationTypes[number]> label="Random Photos Orientation" value={settings.randomPhotoOrientation} options={randomPhotoOrientationTypes} onChange={setRandomPhotoOrientation} />

                </div>

              </div>
            </div>
          </Transition.Child>

        </div>

      </Dialog >
    </Transition >
  )
}


export default SettingsModal