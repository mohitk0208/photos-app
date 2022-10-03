import { Dialog, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, Key } from "react";
import { useSettings } from "../../../context/SettingsContext";
import { randomPhotosCountTypes } from "../../../types/context";


type SelectProps<T> = {
  label: string,
  options: T[] | readonly T[],
  value: T,
  onChange: (value: T) => void
}


function Select<T>({ label, options, value, onChange }: SelectProps<T>) {
  const { settings, setRandomPhotosCount } = useSettings()

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="mt-1 flex items-center justify-between relative">
        <p className="" >
          {label}
        </p>
        <Listbox.Button className="relative py-2 pl-3 pr-10 text-left bg-white dark:bg-slate-700 rounded-lg shadow md:min-w-[8rem] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white dark:focus-visible:ring-slate-400 focus-visible:ring-offset-lime-300 dark:focus-visible:ring-offset-lime-600
        focus-visible:ring-offset-1 focus-visible:border-lime-500 sm:text-sm transition-colors duration-200 ease-in-out">
          <span className="block truncate">{value}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-lime-400 "
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute top-full right-0 z-50 w-1/2 py-0 mt-1 overflow-auto text-base bg-white dark:bg-slate-600 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm transition-colors  duration-200 ease-in-out">
            {options.map((val) => (
              <Listbox.Option
                key={val as Key}
                className={({ active, selected }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 transition-colors  duration-200 ease-in-out ${active ? 'text-lime-900 bg-lime-200/80' : 'text-lime-200'
                  } ${selected ? "bg-lime-300/80 text-lime-800" : "text-lime-600"}`
                }
                value={val}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                        }`}
                    >
                      {val}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lime-600 transition-colors  duration-200 ease-in-out">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}


export default Select