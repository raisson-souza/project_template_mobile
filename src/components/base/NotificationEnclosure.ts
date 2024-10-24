import { Platform } from "react-native"
import { useEffect } from 'react'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'

type NotificationEnclosureProps = {
    children: JSX.Element | JSX.Element[]
}

async function getNotificationsPermission(): Promise<void> {
    if (Platform.OS === 'android') {
        // Define um canal de notificações
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }

    // Verifica se o dispositivo é um celular real e solicita permissão para envio de notificações
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== 'granted') {
            // Ação caso permissão para notificação ser negada
        }
    }
}

/**
 * Componente responsável pela captura da permissão do envio de notificações no dispositivo.
 * 
 * Caso seja necessário implementar uma maneira de capturar mensagens do "data" na notificação
 * será necessário transformar este componente em um context e armazenar os Notifications.Subscription
 * em useRef conforme documentação do expo.
*/
export default function NotificationEnclosure({ children }: NotificationEnclosureProps) {
    useEffect(() => { getNotificationsPermission() }, [])
    return children
}