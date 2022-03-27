import { Listbox } from "@headlessui/react";
import { useSettings } from "../../context/SettingsContext";
import { randomPhotosCountTypes } from "../../types/context";

export default function RandomPhotosCountSelect() {

  const { settings, setRandomPhotosCount } = useSettings()

  return (
    <Listbox value={settings.randomPhotosCount} onChange={setRandomPhotosCount} >
      <Listbox.Label>Random Photos Count</Listbox.Label>
      <Listbox.Button>{settings.randomPhotosCount}</Listbox.Button>
      <Listbox.Options>
        {randomPhotosCountTypes.map(val => (
          <Listbox.Option key={val} value={val} >
            {val}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
