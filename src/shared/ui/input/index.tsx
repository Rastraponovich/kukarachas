import clsx from "clsx"
import { InputHTMLAttributes, memo } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    caption?: string
    dense?: boolean
}

export const Input = memo(({ caption, dense = false, ...props }: InputProps) => {
    return (
        <label className="flex flex-col space-y-2 text-black font-bold text-2xl">
            <span className="first-letter:uppercase">{caption}</span>
            <input
                className={clsx(
                    props.className,
                    dense ? "py-4 text-xl" : "py-6",
                    "text-center bg-white rounded-xl"
                )}
                {...props}
            />
        </label>
    )
})

Input.displayName = "Input"
