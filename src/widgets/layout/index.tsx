import clsx from "clsx"
import Head from "next/head"
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
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Serif&display=swap"
                    rel="stylesheet"
                />
            </Head>
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
