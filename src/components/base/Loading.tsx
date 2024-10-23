import { ActivityIndicator, Text, View } from "react-native"

export default function Loading(text?: string) {
    return (
        <View>
            <ActivityIndicator
                color="darkblue"
                size="large"
            />
            <Text>{ text ?? "Carregando..." }</Text>
        </View>
    )
}