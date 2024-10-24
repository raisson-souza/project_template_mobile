import { Platform } from "react-native"
import { useEffect } from 'react'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'

type NotificationEnclosureProps = {
    children: JSX.Element | JSX.Element[]
}

async function registerForPushNotificationsAsync(): Promise<void> {
    if (Platform.OS === 'android') {
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

export default function NotificationEnclosure({ children }: NotificationEnclosureProps) {
    useEffect(() => { registerForPushNotificationsAsync() }, [])
    console.log("NotificationEnclosure")

    return children
}