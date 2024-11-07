import { AuthContextProvider } from "../../contexts/AuthContext"
import { Login } from "../../screens/Login"
import { ParamListBase, useFocusEffect, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useEffect } from "react"

// TODO: EXCLUA ESTE ARQUIVO SE SEU PROJETO NÃO POSSUIR AUTENTICAÇÃO

// TODO: Validar o comportamento dos auths abaixo em seu projeto, podem necessitar de modificação
// ou podem nem mesmo funcionar em seu contexto, valide e teste!

type AuthProps = {
    children: JSX.Element | JSX.Element[]
}

type AuthStackUseNavigationProps = StackNavigationProp<ParamListBase, string, undefined>

/**
 * Componente responsável pelo controle de rotas autenticadas  
 * Oferece redirecionamento ou outras tratativas quando usuário não autenticado  
 * Necessita englobar o componente necessitado de autenticação
 * */
export default function Auth({ children }: AuthProps) {
    // Aqui utilizamos uma navegação não especificada para ser possível redirecionar ao login, se for
    // seu caso, valide conforme a necessidade de seu projeto
    const navigation = useNavigation<AuthStackUseNavigationProps>()
    const { isLogged } = AuthContextProvider()

    // TODO: OPÇÃO PARA PROJETOS QUE POSSUEM ROTAS AUTENTICADAS DENTRO DE NAVEGAÇÕES POR TAB
    // (para projetos que manterão a mesma navegação deste projeto modelo)
    // OPÇÃO GENÉRICA PARA QUALQUER NAVEGAÇÃO
    useFocusEffect(() => {
        if (!isLogged) {
            // Caso usuário não logado, redirecionar para a tela de login de seu projeto
            // ou realizar outra ação conforme seu fluxo ou regra de negócio
            console.error("Usuário não autenticado. FOCUS") // <-- Remova
            // navigation.navigate("Login") // <-- DESCOMENTAR
        }
    })

    if (!isLogged) {
        // TODO: OPÇÃO PARA PROJETOS QUE POSSUEM ROTAS AUTENTICADAS DENTRO DE NAVEGAÇÕES COM STACK E / OU DRAWER
        // Caso usuário não logado, retornar a tela de login de seu projeto
        // ou realizar outra ação conforme seu fluxo ou regra de negócio    
        console.error("Usuário não autenticado. RENDERIZAÇÃO") // <-- Remova
        // return <Login /> // <-- DESCOMENTAR
    }

    return children
}