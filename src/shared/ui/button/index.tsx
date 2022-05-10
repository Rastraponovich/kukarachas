import { ButtonHTMLAttributes, memo, ReactNode } from "react"
import { EButtonVariant } from "shared/lib"
import type { TButtonVariant } from "shared/lib"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: TButtonVariant
    size?: "big" | "normal"
}

export const Button = memo(
    ({ children, variant = "NORMAL", className, size = "normal", ...props }: ButtonProps) => {
        return (
            <button
                {...props}
                className={clsx(
                    EButtonVariant[variant],
                    className,
                    size === "big" ? "px-28 py-6" : "px-2.5 py-1.5 ",
                    "rounded-xl  font-bold text-xl leading-[30px] hover:bg-[#00990B] hover:text-white duration-150",
                    "disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-400"
                )}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = "Button"
