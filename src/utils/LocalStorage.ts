import AsyncStorage from '@react-native-async-storage/async-storage'
import isNil from './IsNill'

/**
 * Tipo de credenciais aceitas na autenticação
 * // TODO: alterar se necessário
*/
export type LocalStorageCredentials = {
    email: string
    password: string
}

/** Tipo com funções específicas para propriedades do local storage */
type LocalStorageDefiners<T> = {
    get: () => Promise<T | null>
    set: (value: T) => Promise<void>
    remove: () => Promise<void>
}

type LocalStorageProps = {
    /** Token de autenticação da API */
    apiToken: LocalStorageDefiners<string>
    /** Credenciais de login do usuário */
    loginCredentials: LocalStorageDefiners<LocalStorageCredentials>
    /** Ações no AsyncStorage quando login */
    login: (apiToken: string, credentials: LocalStorageCredentials) => Promise<void>
    /** Ações no AsyncStorage quando logoff */
    logoff: () => Promise<void>
}

export const LocalStorage: LocalStorageProps = {
    apiToken: {
        async get() {
            return await AsyncStorage.getItem("api_token")
        },
        async set(value) {
            await AsyncStorage.setItem("api_token", value)
        },
        async remove() {
            await AsyncStorage.removeItem("api_token")
        },
    },
    loginCredentials: {
        async get() {
            return !isNil(await AsyncStorage.getItem("credentials"))
                ? JSON.parse(await AsyncStorage.getItem("credentials") ?? "") as LocalStorageCredentials 
                : null
        },
        async set(value) {
            await AsyncStorage.setItem("credentials", JSON.stringify(value))
        },
        async remove() {
            await AsyncStorage.removeItem("credentials")
        },
    },
    async login(apiToken, credentials) {
        await LocalStorage.loginCredentials.set(credentials)
        await LocalStorage.apiToken.set(apiToken)
    },
    async logoff() {
        await LocalStorage.loginCredentials.remove()
        await LocalStorage.apiToken.remove()
    },
}