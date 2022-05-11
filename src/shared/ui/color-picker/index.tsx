import { ChangeEvent, InputHTMLAttributes, memo } from "react"

interface ColorPickerProps extends InputHTMLAttributes<HTMLInputElement> {
    caption: string
}

export const ColorPicker = memo(({ caption, ...props }: ColorPickerProps) => {
    return (
        <label className="flex flex-col space-y-4">
            <span className="first-letter:uppercase">{caption}</span>
            <input
                type="color"
                {...props}
                className="w-full rounded-lg border border-black h-16 p-4 bg-white"
            />
        </label>
    )
})

ColorPicker.displayName = "ColorPicker"
