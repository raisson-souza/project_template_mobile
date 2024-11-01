import { createContext, useContext, useEffect, useRef } from "react"
import InternetInfo from "../utils/InternetInfo"

type SyncContextProps = {
    children: JSX.Element | JSX.Element[]
}

type SyncContext = {
    /** Ref de conexão de internet */
    isConnectedRef: React.MutableRefObject<boolean>
    /** Ref de processo de sincronização */
    isSyncingRef: React.MutableRefObject<boolean>
    /**
     * Função base de sincronização de dados  
     * Realiza a atualização dos dados offline com dados da nuvem  
     * Realiza a atualização dos dados da nuvem com os dados offline
     * */
    syncData: () => Promise<void>
    /**
     * Ref para indicar se todos os dados locais e em nuvem estão atualizados  
     * É necessário setar como false em fluxos necessários nas services
     * */
    isDataUpToDate: React.MutableRefObject<boolean>
}

const SyncContext = createContext<SyncContext | null>(null)

/** Context especializado na verificação de conectividade e sincronização dos dados da aplicação */
export default function SyncContextComponent({ children }: SyncContextProps) {
    const isConnectedRef = useRef<boolean>(false)
    const isSyncingRef = useRef<boolean>(false)
    const isDataUpToDate = useRef<boolean>(false)

    useEffect(() => {
        /** Intervalo de verificação de conectividade */
        const syncInterval = setInterval(async () => {
            await InternetInfo()
                .then(result => { isConnectedRef.current = result ? result.isConnected : false })
        }, 10000)

        /** Intervalo de processamento de sincronização */
        const syncDataActionInterval = setInterval(async () => {
            // Se há conectividade, nenhum processo de sincronização ativo e se nem todos
            // os dados estão sincronizados, é necessário sincronizar
            if (
                isConnectedRef.current &&
                !isSyncingRef.current &&
                !isDataUpToDate.current
            ) await syncData()
        }, 10500)

        return () => {
            clearInterval(syncInterval)
            clearInterval(syncDataActionInterval)
        }
    }, [])

    /** Função base de sincronização de dados */
    const syncData = async (): Promise<void> => {
        isSyncingRef.current = true
        await syncLocalData()
        await syncCloudData()
        isSyncingRef.current = false
        isDataUpToDate.current = true
    }

    /** realiza a sincronização de dados locais com a nuvem */
    const syncLocalData = async (): Promise<void> => {
        console.log("Atualizando os dados locais...")
        try {
            // ...
            console.log("Dados locais atualizados.")
        } catch (ex) {
            console.error("Houve um erro ao atualizar os dados locais:", (ex as Error).message)
        }
    }

    /** realiza a sincronização de dados em nuvem com dados locais */
    const syncCloudData = async (): Promise<void> => {
        console.log("Atualizando os dados em nuvem...")
        try {
            // ...
            console.log("Dados em nuvem atualizados.")
        } catch (ex) {
            console.error("Houve um erro ao atualizar os dados em nuvem:", (ex as Error).message)
        }
    }

    return (
        <SyncContext.Provider value={{ isConnectedRef, isSyncingRef, syncData, isDataUpToDate }}>
            { children }
        </SyncContext.Provider>
    )
}

export function SyncContextProvider() {
    const context = useContext(SyncContext)
    if (!context) throw new Error("SyncContext chamado fora do provider.")
    return context
}