import { createContext, useContext, useState } from "react"
import { Screen } from "../components/base/Screen"
import Loading from "../components/base/Loading"

type AuthContextProps = {
    children: JSX.Element | JSX.Element[]
}

type AuthContext = {
    isLogged: boolean
    /** Usando com o hook useTransition, pode não realizar um refresh no componente se necessário */
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContext | null>(null)

/** Context de autenticação, realiza o refresh do token de autenticação e valida credenciais no localStorage */
export default function AuthContextComponent({ children }: AuthContextProps) {
    const [ loading, setLoading ] = useState<boolean>(false) // TODO: definir regra de negócio para loading
    const [ isLogged, setIsLogged ] = useState<boolean>(false)

    if (loading) {
        return (
            <Screen>
                { Loading() }
            </Screen>
        )
    }

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            { children }
        </AuthContext.Provider>
    )
}

export function AuthContextProvider() {
    const context = useContext(AuthContext)
    if (!context) throw new Error("AuthContext chamado fora do provider.")
    return context
}