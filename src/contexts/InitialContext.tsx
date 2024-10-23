import { Screen } from "../components/base/Screen"
import Loading from "../components/base/Loading"
import React, { createContext, useContext, useState } from "react"

type InitialContextProps = {
    children: JSX.Element | JSX.Element[]
}

type InitialContext = {}

const InitialContext = createContext<InitialContext | null>(null)

export default function InitialContextComponent({ children }: InitialContextProps) {
    const [ loading, setLoading ] = useState<boolean>(false) // TODO: definir regra de negócio para loading

    if (loading) {
        return (
            <Screen>
                { Loading() }
            </Screen>
        )
    }

    return (
        <InitialContext.Provider value={{}}>
            { children }
        </InitialContext.Provider>
    )
}

export function InitialContextProvider() {
    const initialContext = useContext(InitialContext)
    if (!initialContext) throw new Error("InitialContext chamado fora do provider.")
    return initialContext
}