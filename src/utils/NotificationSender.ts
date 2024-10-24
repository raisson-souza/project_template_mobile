import * as Notifications from 'expo-notifications'

type NotificationSenderProps = {
    title: string
    subtitle?: string
    body?: string
    showAlert?: boolean
    playSound?: boolean
    awaitSeconds?: number
    appLogoBackgroundColor?: string
}

export default async function NotificationSender({
    title,
    subtitle = undefined,
    body = "Verifique o aplicativo.",
    showAlert = true,
    playSound = true,
    awaitSeconds = 1,
    appLogoBackgroundColor = "#00008B",
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
            data: {}, // Configurar dados da notificação aqui caso seja necessário implementar captura destes dados
            color: appLogoBackgroundColor,
            subtitle: subtitle,
        },
        trigger: {
            seconds: awaitSeconds,
            channelId: 'default',
        },
    })
}