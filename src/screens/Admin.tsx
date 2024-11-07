import { Screen } from "../components/base/Screen"
import { StyleSheet, Text } from "react-native"
import Auth from "../components/auth/Auth"
import React from "react"

/**
 * Tela do administrador  
 * É autenticado
 * */
export const Admin: React.FC<{}> = ({ }) => {
    return (
        <Auth>
            <Screen>
                <Text>Project Template Mobile</Text>
                <Text>ADMIN</Text>
            </Screen>
        </Auth>
    )
}

const styles = StyleSheet.create({
})