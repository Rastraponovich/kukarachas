import { Listbox, Transition } from "@headlessui/react"
import { Component, Fragment, memo, useState } from "react"

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
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
                        <Listbox.Button
                            className={clsx(
                                open ? "rounded-t-lg" : "rounded-lg",
                                "relative w-full cursor-pointer bg-white py-4   border border-black"
                            )}
                        >
                            <span className="block truncate pl-[18px] pr-[27px] text-left ">
                                {value.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center pr-2 text-[#36DB41]">
                                {open ? (
                                    <ChevronUpIcon className="h-5 w-5 " aria-hidden="true" />
                                ) : (
                                    <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
                                )}
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="z-50 absolute w-full rounded-b-lg bg-white pb-2 pr-[15px] pl-3 shadow-lg border border-black border-t-transparent divide-y divide-[#A8B8E1]">
                                {items.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-pointer select-none py-2  text-center  ${
                                                active ? "bg-[#A8B8E1] text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected ? "font-medium" : "font-normal"
                                                    }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
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
