import { NextPage } from "next"
import React from "react"

import { Provider } from "effector-react/scope"

import { AppProps } from "next/app"
import "styles/globals.css"

import { fork, Scope, serialize } from "effector"

let clientScope: Scope

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
    const scope = fork({
        values: {
            ...(clientScope && serialize(clientScope)),
            ...pageProps.initialState,
        },
    })
    if (typeof window !== "undefined") clientScope = scope

    return (
        <Provider value={scope}>
            <Component {...pageProps} router={router} />
        </Provider>
    )
}

export default App
