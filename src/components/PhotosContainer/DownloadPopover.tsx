import { Popover, Transition } from "@headlessui/react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import { Fragment, MouseEventHandler } from "react";
import { PhotoBasicType, PhotoType } from "../../types/photo";



const DownloadPopover = ({ photo }: { photo: PhotoType | PhotoBasicType }) => {

  const downloadButtonClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    console.log("Download button clicked");
  }

  const download = (e: React.MouseEvent<HTMLAnchorElement>, href: string, type: "full" | "raw" | "regular" | "small" | "thumb") => {
    console.log(href);
    fetch(href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${photo.id}__${type}.jpg`); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Popover as="div" className={`w-6 h-6`} onClick={downloadButtonClickHandler} >
      <Popover.Button as="button" >
        <ArrowCircleDownIcon className={`w-6 h-6 stroke-1 stroke-slate-50 hover:text-slate-100`} />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute bottom-6 right-16 rounded-md bg-gray-50 dark:bg-gray-600 dark:text-white ">
          <a className="block px-2 py-1 rounded-md focus:border-indigo-200 outline-none w-full focus:ring focus:ring-blue-300 hover:bg-slate-200 " onClick={(e) => download(e, photo.urls.full, "full")}>
            Full
          </a>
          <a className="block px-2 py-1 rounded-md focus:border-indigo-200 outline-none w-full focus:ring focus:ring-blue-300 hover:bg-slate-200 " onClick={(e) => download(e, photo.urls.raw, "raw")} >
            Raw
          </a>
          <a className="block px-2 py-1 rounded-md focus:border-indigo-200 outline-none w-full focus:ring focus:ring-blue-300 hover:bg-slate-200 " onClick={(e) => download(e, photo.urls.regular, "regular")}>
            Regular
          </a>
          <a className="block px-2 py-1 rounded-md focus:border-indigo-200 outline-none w-full focus:ring focus:ring-blue-300 hover:bg-slate-200 " onClick={(e) => download(e, photo.urls.small, "small")} >
            Small
          </a>
          <a className="block px-2 py-1 rounded-md focus:border-indigo-200 outline-none w-full focus:ring focus:ring-blue-300 hover:bg-slate-200 " onClick={(e) => download(e, photo.urls.thumb, "thumb")}>
            Thumb
          </a>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default DownloadPopover;