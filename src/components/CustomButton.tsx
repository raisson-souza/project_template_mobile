import { DimensionValue, Pressable, Text, TextStyle, TouchableHighlight, TouchableOpacity } from "react-native"

export type CustomButtonProps = {
    title: string
    onPress: () => any
    btnAnimation: "none" | "opacity" | "highlight" 
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
    btnAnimation= "opacity",
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
    const btnStyle: any = {
        backgroundColor: active ? btnBackground : "gray",
        width: btnWidth,
        height: btnHeight,
        borderRadius: btnBorder.radius,
        borderWidth: btnBorder.px,
        borderStyle: "solid",
    }
    const btnText = <Text style={{ color: btnTextColor, fontWeight: titleStyle.fontWeight, fontSize: titleStyle.fontSize, padding: 5 }}>{ title }</Text>

    if (btnAnimation === "highlight") {
        return (
            <TouchableHighlight
                style={ btnStyle }
                disabled={ !active }
                onPress={ async () => { await onPress() }}
            >
                { btnText }
            </TouchableHighlight>
        )
    }

    if (btnAnimation === "opacity") {
        return (
            <TouchableOpacity
                style={ btnStyle }
                disabled={ !active }
                onPress={ async () => { await onPress() }}
            >
                { btnText }
            </TouchableOpacity>
        )
    }

    return (
        <Pressable
            style={ btnStyle }
            disabled={ !active }
            onPress={ async () => { await onPress() } }
        >
            { btnText }
        </Pressable>
    )
}