import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"


interface PhotoModalProps {
  show: boolean,
  className?: string,
  size?: "sm" | "md" | "lg" | "xl" | "2xl",
  currentImgUrl: string,
  onClose: () => void,
  onNextClick: () => void,
  onPrevClick: () => void,
}


const PhotoModal = ({ size = "md", className = "", ...props }: PhotoModalProps) => {

  const MODAL_WIDTH = {
    "sm": "max-w-md",
    "md": "max-w-lg",
    "lg": "max-w-xl",
    "xl": "max-w-2xl",
    "2xl": "max-w-3xl"
  }


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
            <div className={`transition-all transform shadow-xl rounded-lg mx-auto max-h-[90vh] max-w-[80vw] align-middle`}>
              <div className={`max-w-[80vw] h-[90vh] ${className}`}>
                <img className=' aspect-auto h-full object-contain select-none' src={props.currentImgUrl} />
              </div>
            </div>
          </Transition.Child>

          <ChevronLeftIcon className="fixed left-10 top-1/2 -translate-y-1/2 w-20 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-70 transition-opacity duration-200 ease-in-out select-none" onClick={props.onPrevClick} />

          <ChevronRightIcon className="fixed right-10 top-1/2 -translate-y-1/2 w-20 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-70 transition-opacity duration-200 ease-in-out select-none " onClick={props.onNextClick} />

        </div>

      </Dialog >
    </Transition >
  )
}

export default PhotoModal