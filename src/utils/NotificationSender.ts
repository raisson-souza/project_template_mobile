import * as Notifications from 'expo-notifications'

type NotificationSenderProps = {
    title: string
    body?: string
    showAlert?: boolean
    playSound?: boolean
    awaitSeconds?: number
}

export default async function NotificationSender({
    title,
    body = "Verifique o aplicativo.",
    showAlert = true,
    playSound = true,
    awaitSeconds = 1,
}: NotificationSenderProps) {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: showAlert,
            shouldPlaySound: playSound,
            shouldSetBadge: false,
            priority: Notifications.AndroidNotificationPriority.MAX
        }),
    })

    await Notifications.scheduleNotificationAsync({
        content: { // TODO: verificar outras props
            title: title,
            body: body,
            data: {} // Configurar dados da notificação aqui caso seja necessário implementar captura destes dados
        },
        trigger: {
            seconds: awaitSeconds,
            channelId: 'default',
        },
    })
}