import { Screen } from "../components/base/Screen"
import { StyleSheet, Text } from "react-native"
import React from "react"

/** Tela de login */
export const Login: React.FC<{}> = ({ }) => {
    return (
        <Screen>
            <Text>Project Template Mobile</Text>
            <Text>LOGIN</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
})