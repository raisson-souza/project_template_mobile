import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationParams, TabNavigationParams } from "../../App"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text, StyleSheet, View, Button, Platform } from "react-native"
import { useState, useEffect, useRef } from 'react'
import * as Notifications from 'expo-notifications'
import React from "react"
import NotificationSender from "../utils/NotificationSender"

type HomeStackUseNavigationProps = StackNavigationProp<StackNavigationParams, "Tabs">
type HomeStackUseRouteProps = RouteProp<StackNavigationParams, "Tabs">

type HomeTabUseNavigationProps = BottomTabNavigationProp<TabNavigationParams, "Home">
type HomeTabUseRouteProps = RouteProp<TabNavigationParams, "Home">

export const Home: React.FC<{}> = ({ }) => {
    const stackNavigation = useNavigation<HomeStackUseNavigationProps>()
    const tabNavigation = useNavigation<HomeTabUseNavigationProps>()
    const stackRoute = useRoute<HomeStackUseRouteProps>()
    const tabRoute = useRoute<HomeTabUseRouteProps>()

    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <Button
                    title="ENVIAR NOTIFICAÇÃO"
                    onPress={async () => {
                        await NotificationSender({ title: "Cagaro" })
                    }}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
})