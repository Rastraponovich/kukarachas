import clsx from "clsx"
import { InputHTMLAttributes, memo } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    caption?: string
    dense?: boolean
}

export const Input = memo(({ caption, dense = false, ...props }: InputProps) => {
    return (
        <label className="flex flex-col space-y-4 ">
            <span className="first-letter:uppercase">{caption}</span>
            <input
                className={clsx(
                    props.className,
                    dense ? "text-xl" : "py-4 px-[19px]",
                    "bg-white rounded-lg border border-black placeholder:first-letter:uppercase text-base placeholder:text-black leading-[19px]"
                )}
                {...props}
            />
        </label>
    )
})

Input.displayName = "Input"
