import { RouteProp, useNavigation } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationParams } from "../../App"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text } from "react-native"
import CustomButton from "../components/customs/CustomButton"

type DetailStackUseRouteProps = RouteProp<StackNavigationParams, "Detail">
type DetailProps = {
    route: DetailStackUseRouteProps
}

type DetailStackUseNavigationProps = StackNavigationProp<StackNavigationParams, "Detail">

export const Detail: React.FC<DetailProps> = ({ route }) => {
    const stackNavigation = useNavigation<DetailStackUseNavigationProps>()

    return (
        <Screen>
            <Text>Informação da rota pelas props: { route.params.info }</Text>
            <CustomButton title="Voltar" onPress={ () => stackNavigation.navigate("Tabs") } />
        </Screen>
    )
}