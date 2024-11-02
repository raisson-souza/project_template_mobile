import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationParams, TabNavigationParams } from "../../App"
import { StackNavigationProp } from "@react-navigation/stack"
import { StyleSheet, Text } from "react-native"
import React from "react"

type HomeStackUseNavigationProps = StackNavigationProp<StackNavigationParams, "Tabs">
type HomeStackUseRouteProps = RouteProp<StackNavigationParams, "Tabs">

type HomeTabUseNavigationProps = BottomTabNavigationProp<TabNavigationParams, "Home">
type HomeTabUseRouteProps = RouteProp<TabNavigationParams, "Home">

/** Tela home */
export const Home: React.FC<{}> = ({ }) => {
    const stackNavigation = useNavigation<HomeStackUseNavigationProps>()
    const tabNavigation = useNavigation<HomeTabUseNavigationProps>()
    const stackRoute = useRoute<HomeStackUseRouteProps>()
    const tabRoute = useRoute<HomeTabUseRouteProps>()

    return (
        <Screen>
            <Text>Project Template Mobile</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
})