import NetInfo, { NetInfoStateType } from '@react-native-community/netinfo'

type InternetInfoReturn = {
    internalIp: string
    subnet: string
    speedMbps: number
    isConnected: boolean
    isWifiEnabled: boolean
    internetType: NetInfoStateType
    /** Para capturar o nome do wifi será necessário instalar o expo-location e solicitar permissão de localização */
    ssid?: never
}

/** Captura informações sobre a conexão de internet do dispositivo */
export default async function InternetInfo(): Promise<InternetInfoReturn | null> {
    try {
        let internetInfo: InternetInfoReturn | null = null
        await NetInfo.fetch()
            .then(state => {
                internetInfo = {
                    internalIp: (state.details as any)["ipAddress"],
                    subnet: (state.details as any)["subnet"],
                    speedMbps: (state.details as any)["linkSpeed"],
                    isConnected: state.isConnected ?? false,
                    isWifiEnabled: state.isWifiEnabled ?? false,
                    internetType: state.type,
                }
            })
        return internetInfo
    }
    catch { return null }
}