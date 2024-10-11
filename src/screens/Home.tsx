import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RouteProp, useNavigation } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationParams, TabNavigationParams } from "../../App"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text, StyleSheet } from "react-native"
import React from "react"

type HomeProps = {
    route: RouteProp<StackNavigationParams, "Home">
}

type HomeStackNavigationProps = StackNavigationProp<StackNavigationParams, "Home">

type HomeTabNavigationProps = BottomTabNavigationProp<TabNavigationParams, "Home">

export const Home: React.FC<HomeProps> = ({ route: stackRoute }) => {
    const stackNavigation = useNavigation<HomeStackNavigationProps>()
    const tabNavigation = useNavigation<HomeTabNavigationProps>()

    return (
        <Screen>
            <Text>Project Template Mobile</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
})