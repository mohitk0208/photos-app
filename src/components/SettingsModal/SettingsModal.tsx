import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

interface SettingsModalProps {
  show: boolean,
  className?: string,
  onClose: () => void,
}


const SettingsModal = ({ className = "", ...props }: SettingsModalProps) => {
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

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8 scale-75 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-8 sm-translate-y-0 sm:scale-95"
          >
            <div className={`transition-all transform shadow-xl rounded-lg mx-auto max-h-[90vh] max-w-[80vw] align-middle bg-white`}>
              hi
            </div>
          </Transition.Child>

        </div>

      </Dialog >
    </Transition >
  )
}


export default SettingsModal