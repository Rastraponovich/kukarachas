import clsx from "clsx"
import { ButtonHTMLAttributes, memo, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = memo(({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={clsx(
                "rounded-lg duration-150 px-10 py-4 first-letter:uppercase self-center bg-[#00990B] text-white disabled:text-black hover:bg-[#99D69D] disabled:bg-[#D9D7D7] disabled:hover:bg-[#D9D7D7]",
                className
            )}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button"
