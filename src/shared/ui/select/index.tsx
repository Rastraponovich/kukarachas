import { Listbox, Transition } from "@headlessui/react"
import { Fragment, memo } from "react"

import clsx from "clsx"

interface SelectProps {
    items?: any[]
    caption?: string
    value: any
    onChange?(val: any): void
}

export const Select = memo(({ items, caption, value, onChange }: SelectProps) => {
    return (
        <div className="flex flex-col ">
            <span className="first-letter:uppercase mb-4">{caption}</span>
            <Listbox value={value} onChange={onChange}>
                {({ open }) => (
                    <div className="relative  lowercase text-base leading-[19px]">
                        <Listbox.Button className="relative w-full cursor-pointer bg-white py-4 rounded-lg  border border-black">
                            <span className="block truncate pl-[18px] pr-[27px] text-left ">
                                {value.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center pr-2 text-[#36DB41]">
                                <TriangleUpIcon
                                    className={clsx(
                                        !open ? " text-[#C4C4C4]" : "rotate-180 text-[#00990B]"
                                    )}
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="z-50 absolute w-full rounded-lg bg-white p-2.5  shadow-lg border border-black space-y-2.5">
                                {items.map((kukaracha, idx) => (
                                    <Listbox.Option
                                        key={idx}
                                        className={({ active }) =>
                                            `relative px-[30px] py-4 cursor-pointer select-none  rounded-lg  ${
                                                active && "bg-[#C4C4C4] text-[#231F20]"
                                            }`
                                        }
                                        value={kukaracha}
                                    >
                                        <span className="block truncate">{kukaracha.name}</span>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    )
})
Select.displayName = "Select"

const TriangleUpIcon = memo(({ className }: { className: string }) => {
    return (
        <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M7 0L13.9282 9.75H0.0717969L7 0Z" />
        </svg>
    )
})
TriangleUpIcon.displayName = "TriangleUpIcon"
