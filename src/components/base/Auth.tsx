import { AuthContextProvider } from "../../contexts/AuthContext"
import { Screen } from "./Screen"
import Loading from "./Loading"

type AuthProps = {
    children: JSX.Element | JSX.Element[]
}

/**
 * Componente responsável pelo controle de rotas autenticadas  
 * Oferece redirecionamento ou outras tratativas quando usuário não autenticado  
 * Necessita englobar o componente necessitado de autenticação
 * */
export default function Auth({ children }: AuthProps) {
    const { isLogged } = AuthContextProvider()

    if (!isLogged) {
        console.error("Usuário não autenticado.")
        // redirecionamento ou outras ações caso usuário não logado

        return <Screen>{ Loading() }</Screen>
    }

    return children
}