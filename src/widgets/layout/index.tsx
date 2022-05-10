import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header></header>
            <main className="px-24 py-16">{children}</main>
            <footer></footer>
        </>
    )
}
