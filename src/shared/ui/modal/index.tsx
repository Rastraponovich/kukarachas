import { Dialog, Transition } from "@headlessui/react"
import { memo, Fragment, ReactNode, useRef } from "react"

interface ModalProps {
    children?: ReactNode
    isOpened: boolean
    onClose(): void
    title?: string
}

export const Modal = memo(({ children, isOpened, onClose, title }: ModalProps) => {
    const ref = useRef(null)
    return (
        <Transition appear show={isOpened} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose} initialFocus={ref}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#231F20]/50 " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-xl p-5 bg-white  text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl mb-2.5 text-center leading-7 text-black"
                                >
                                    {title}
                                </Dialog.Title>

                                <div ref={ref}>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
})
