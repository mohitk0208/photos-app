import { Listbox } from "@headlessui/react";
import { useSettings } from "../../context/SettingsContext";
import { randomPhotoOrientationTypes } from "../../types/context";

export default function RandomPhotoOrientationSelect() {

  const { settings, setRandomPhotoOrientation } = useSettings()

  return (
    <Listbox value={settings.randomPhotoOrientation} onChange={setRandomPhotoOrientation} as="div" className={`block`} >
      <Listbox.Label>Random Photos Orientation</Listbox.Label>
      <Listbox.Button>{settings.randomPhotoOrientation}</Listbox.Button>
      <Listbox.Options>
        {randomPhotoOrientationTypes.map(val => (
          <Listbox.Option key={val} value={val} >
            {val}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
