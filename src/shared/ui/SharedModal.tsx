import React, { FC } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

interface ComponentProps {
  content: React.ReactNode
  isActive: boolean
  updateHandler: () => void
}

export const SharedModal: FC<ComponentProps> = ({ isActive, updateHandler, content }) => {
  function closeModal() {
    updateHandler()
  }

  return (
    <>
      <Transition
        appear
        show={isActive}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                leave="ease-in duration-200"
                enterFrom="opacity-0 top-[-10px]"
                enterTo="opacity-100 top-0"
                leaveFrom="opacity-100 top-0"
                leaveTo="opacity-0  top-[10px]"
              >
                <Dialog.Panel className="relative max-w-[587px] overflow-hidden rounded-[20px] bg-white px-[20px] pb-[40px] pt-[70px] lg:px-[70px] lg:pt-[35px]">
                  <button
                    onClick={closeModal}
                    className="group absolute right-[15px] top-[15px] inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-dark transition-all duration-300 hover:bg-accent active:bg-gray"
                  >
                    <svg
                      width="24"
                      height="13"
                      viewBox="0 0 24 13"
                      className="stroke-black transition-all duration-300 group-active:stroke-dark"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 1.302L17.5628 11.8648" />
                      <path d="M7.36133 11.5627L17.9241 0.999934" />
                    </svg>
                  </button>
                  {content}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
