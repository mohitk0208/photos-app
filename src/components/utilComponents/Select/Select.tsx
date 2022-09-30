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
        <Listbox.Button className="relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow md:min-w-[8rem] cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">{value}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
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
          <Listbox.Options className="absolute top-full right-0 z-50 w-1/2 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((val) => (
              <Listbox.Option
                key={val as Key}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                  }`
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
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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