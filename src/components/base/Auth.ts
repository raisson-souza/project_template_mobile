import { AuthContextProvider } from "../../contexts/AuthContext"

type AuthProps = {
    children: JSX.Element | JSX.Element[]
}

export default function Auth({ children }: AuthProps) {
    const { isLogged } = AuthContextProvider()

    if (!isLogged) {
        console.error("Usuário não autenticado.")
        // redirecionamento ou outras ações caso usuário não logado
    }

    return children
}