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
        <div className="flex flex-col text-2xl  font-bold">
            <span className="first-letter:uppercase">{caption}</span>
            <Listbox value={value} onChange={onChange}>
                {({ open }) => (
                    <div className="relative  lowercase">
                        <Listbox.Button
                            className={clsx(
                                open ? "rounded-t-xl" : "rounded-xl",
                                "relative w-full cursor-pointer bg-white py-6 px-4 text-center "
                            )}
                        >
                            <span className="block truncate">{value.name}</span>
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
                            <Listbox.Options className="z-50 absolute w-full rounded-b-xl bg-white pb-2 pr-[15px] pl-3 shadow-lg">
                                {items.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-pointer select-none py-4 text-center border-t-4 border-[#99D69D] border-dashed ${
                                                active
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "text-gray-900"
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
