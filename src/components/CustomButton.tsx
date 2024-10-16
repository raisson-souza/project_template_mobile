import { DimensionValue, Pressable, Text, TextStyle } from "react-native"

type CustomButtonProps = {
    title: string
    onPress: () => any
    active?: boolean
    btnBackground?: string
    btnTextColor?: string
    btnWidth?: DimensionValue
    btnHeight?: DimensionValue
    btnBorder?: {
        radius?: number
        px?: number
    }
    titleStyle?: {
        fontWeight: TextStyle["fontWeight"]
        fontSize: number
    }
}

export default function CustomButton({
    title,
    onPress,
    active = true,
    btnBackground = "blue",
    btnTextColor = "white",
    btnWidth = "auto",
    btnHeight = "auto",
    btnBorder = {
        radius: 10,
        px: 0.5,
    },
    titleStyle = {
        fontWeight: "bold",
        fontSize: 16,
    },
}: CustomButtonProps) {
    return (
        <Pressable
            style={{
                backgroundColor: btnBackground,
                width: btnWidth,
                height: btnHeight,
                borderRadius: btnBorder.radius,
                borderWidth: btnBorder.px,
                borderStyle: "solid"
            }}
            disabled={ !active }
            onPress={ onPress }
        >
            <Text style={{ color: btnTextColor, fontWeight: titleStyle.fontWeight, fontSize: titleStyle.fontSize, padding: 5 }}>{ title }</Text>
        </Pressable>
    )
}