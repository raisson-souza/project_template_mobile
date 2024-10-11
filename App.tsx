import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "./src/screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons"
import React from "react"

/** Parâmetros da navegação por tab */
export type TabNavigationParams = {
  /** Componente Home da tabs */
  Home: undefined
}

const Tab = createBottomTabNavigator<TabNavigationParams>()

/** Componente de navegação por tab */
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={ Home }
        options={{
          tabBarIcon: ({ color, size }) => (<Icon name="home-outline" color={ color } size={ size } />),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

/** Parâmetros da navegação por stack */
export type StackNavigationParams = {
  /** Navegação por tabs */
  Tabs: undefined
}

const Stack = createStackNavigator<StackNavigationParams>()

/** Componente de navegação por stack */
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={ TabNavigator }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export type DrawerNavigationParams = {
  /** Primeira stack de navegação */
  Stack: undefined
}

const Drawer = createDrawerNavigator<DrawerNavigationParams>()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Stack">
        <Drawer.Screen
          name="Stack"
          component={ StackNavigator }
          options={{ title: "Home" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App