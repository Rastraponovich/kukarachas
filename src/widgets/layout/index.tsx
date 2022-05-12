import clsx from "clsx"
import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
    title?: string
    color?: string
}

export const Layout = ({ children, title, color = "bg-[#99D69D]" }: LayoutProps) => {
    return (
        //px-24 py-16
        <>
            <main className={clsx("flex flex-col space-y-4 p-10", color)}>
                <div className="flex justify-between items-center">
                    <h2 className="text-white font-bold text-4xl leading-[37px] first-letter:uppercase">
                        {title}
                    </h2>
                    <button className="bg-white py-2.5 px-10 rounded-lg text-[#00990B] uppercase border border-black">
                        ru
                    </button>
                </div>
                {children}
            </main>
        </>
    )
}
