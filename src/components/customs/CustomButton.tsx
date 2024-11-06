import { DimensionValue, Pressable, Text, TextStyle, TouchableHighlight, TouchableOpacity, PressableProps, TouchableHighlightProps, TouchableOpacityProps } from "react-native"

export type CustomButtonProps = {
    /** Título do botão */
    title: string
    /** Ação realizada após clique no botão */
    onPress: () => any
    /** Animação de clique no botão */
    btnAnimation?: "none" | "opacity" | "highlight" 
    /** Botão ativo */
    active?: boolean
    /** Cor de fundo do botão */
    btnBackground?: string
    /** Cor do texto do botão */
    btnTextColor?: string
    /** Largura do botão */
    btnWidth?: DimensionValue
    /** Altura do botão */
    btnHeight?: DimensionValue
    /** Estilo de borda do botão */
    btnBorder?: {
        radius?: number
        px?: number
    }
    /** Estilo do texto */
    titleStyle?: {
        fontWeight: TextStyle["fontWeight"]
        fontSize: number
    }
    /** Propriedades do botão (irão sobrepor as outras) */
    innerProps?: PressableProps | TouchableHighlightProps | TouchableOpacityProps
}

/** Componente customizado para botão */
export default function CustomButton({
    title,
    onPress,
    btnAnimation = "opacity",
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
    innerProps = {},
}: CustomButtonProps) {
    const btnStyle: any = {
        backgroundColor: active ? btnBackground : "gray",
        width: btnWidth,
        height: btnHeight,
        borderRadius: btnBorder.radius,
        borderWidth: btnBorder.px,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
    }
    const btnText = <Text style={{ color: btnTextColor, fontWeight: titleStyle.fontWeight, fontSize: titleStyle.fontSize, padding: 5 }}>{ title }</Text>

    if (btnAnimation === "highlight") {
        return (
            <TouchableHighlight
                style={ btnStyle }
                disabled={ !active }
                onPress={ async () => { await onPress() }}
                { ...innerProps as any }
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
                { ...innerProps as any }
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
            { ...innerProps as any }
        >
            { btnText }
        </Pressable>
    )
}