import { Admin } from "./src/screens/Admin"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "./src/screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { SQLiteProvider } from "expo-sqlite"
import { StatusBar } from "expo-status-bar"
import AuthContextComponent from "./src/contexts/AuthContext"
import Icon from "react-native-vector-icons/Ionicons"
import InitialContextComponent from "./src/contexts/InitialContext"
import Migrations from "./db/migrations"
import NotificationEnclosure from "./src/components/base/NotificationEnclosure"
import React from "react"
import SyncContextComponent from "./src/contexts/SyncContext"

/** Parâmetros da navegação por tab */
export type TabNavigationParams = {
  /** Componente Home da tabs */
  Home: undefined
}

const Tab = createBottomTabNavigator<TabNavigationParams>()

const TabScreenStyle = {
  /** Cor de fundo da tab ativa */
  tabBarActiveBackgroundColor: "",
  /** Cor de fundo das tabs inativas */
  tabBarInactiveBackgroundColor: "",
  /** Cor de título do header da tab atual */
  headerTintColor: "white",
  /** Cor de fundo do header da tab atual */
  headerStyle: {
    backgroundColor: "darkblue"
  },
  /** Cor de fundo do footer */
  tabBarStyle: {
    backgroundColor: "darkblue"
  }
}

/** Componente de navegação por tab */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={ TabScreenStyle }
    >
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

const StackScreenStyle = {
  /** Cor do header */
  headerStyle: { backgroundColor: "darkblue" },
  /** Cor do título do header */
  headerTintColor: "white",
}

/** Componente de navegação por stack */
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={ StackScreenStyle }
    >
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
  Admin: undefined
}

const Drawer = createDrawerNavigator<DrawerNavigationParams>()

const drawerScreensStyle = {
  /** Cor do ícone do drawer e título */
  headerTintColor: "white",
  /** Cor do título da aba selecionada na section do drawer */
  drawerActiveTintColor: "white",
  /** Cor dos títulos das abas não selecionadas na section do drawer */
  drawerInactiveTintColor: "grey",
  /** Cor do header */
  headerStyle: { backgroundColor: "darkblue" }
}

const App = () => {
  return (
    <SQLiteProvider
      databaseName="database.db"
      onInit={ Migrations }
    >
      <InitialContextComponent>
        <AuthContextComponent>
          <NotificationEnclosure>
            <SyncContextComponent>
              <NavigationContainer>
                <StatusBar
                  // backgroundColor="#"
                />
                <Drawer.Navigator
                  initialRouteName="Stack"
                  screenOptions={{
                    drawerStyle:{
                      /** Cor de fundo da section do drawer */
                      backgroundColor: "darkblue"
                    }
                  }}
                >
                  <Drawer.Screen
                    name="Stack"
                    component={ StackNavigator }
                    options={{ ...drawerScreensStyle, title: "Home" }}
                  />
                  <Drawer.Screen
                    name="Admin"
                    component={ Admin }
                    options={{ ...drawerScreensStyle, title: "Admin" }}
                  />
                </Drawer.Navigator>
              </NavigationContainer>
            </SyncContextComponent>
          </NotificationEnclosure>
        </AuthContextComponent>
      </InitialContextComponent>
    </SQLiteProvider>
  )
}

export default App