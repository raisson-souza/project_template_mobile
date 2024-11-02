import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationParams, TabNavigationParams } from "../../App"
import { StackNavigationProp } from "@react-navigation/stack"
import { StyleSheet, Text } from "react-native"
import Auth from "../components/base/Auth"
import React from "react"

type AdminStackUseNavigationProps = StackNavigationProp<StackNavigationParams, "Tabs">
type AdminStackUseRouteProps = RouteProp<StackNavigationParams, "Tabs">

type AdminTabUseNavigationProps = BottomTabNavigationProp<TabNavigationParams, "Home">
type AdminTabUseRouteProps = RouteProp<TabNavigationParams, "Home">

/**
 * Tela do administrador  
 * É autenticado
 * */
export const Admin: React.FC<{}> = ({ }) => {
    const stackNavigation = useNavigation<AdminStackUseNavigationProps>()
    const tabNavigation = useNavigation<AdminTabUseNavigationProps>()
    const stackRoute = useRoute<AdminStackUseRouteProps>()
    const tabRoute = useRoute<AdminTabUseRouteProps>()

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