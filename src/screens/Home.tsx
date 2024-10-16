import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationParams, TabNavigationParams } from "../../App"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text, StyleSheet, Image } from "react-native"
import React, { useState } from "react"
import CameraPicker, { ImagePickerImageProps } from "../components/CameraPicker"

type HomeStackUseNavigationProps = StackNavigationProp<StackNavigationParams, "Tabs">
type HomeStackUseRouteProps = RouteProp<StackNavigationParams, "Tabs">

type HomeTabUseNavigationProps = BottomTabNavigationProp<TabNavigationParams, "Home">
type HomeTabUseRouteProps = RouteProp<TabNavigationParams, "Home">

export const Home: React.FC<{}> = ({ }) => {
    const stackNavigation = useNavigation<HomeStackUseNavigationProps>()
    const tabNavigation = useNavigation<HomeTabUseNavigationProps>()
    const stackRoute = useRoute<HomeStackUseRouteProps>()
    const tabRoute = useRoute<HomeTabUseRouteProps>()
    const [ images, setImages ] = useState<ImagePickerImageProps[]>([])

    console.log("images len", images.length)
    console.log("image 0 uri", images[0].uri)

    return (
        <Screen>
            <Text>Project Template Mobile</Text>
            <CameraPicker images={ images } setImages={ setImages } />
            { images.length > 0 ? <Image alt="aa" source={{ uri: images[0].uri }} /> : <></> }
        </Screen>
    )
}

const styles = StyleSheet.create({
})