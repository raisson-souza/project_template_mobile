import { KeyboardTypeOptions, TextInput, View, TextInputProps, StyleSheet, Text, StyleProp, TextStyle } from "react-native"
import { useState } from "react"

type CustomInputProps = {
    /** Label do campo */
    label?: string
    labelStyle?: StyleProp<TextStyle>
    placeHolder?: string
    active?: boolean
    defaultValue?: string
    /** Propriedades do TextInput (irão sobrepor todas as outras) */
    innerProps?: TextInputProps
    inputStyle?: StyleProp<TextStyle>
    /** Tipo de teclado do input */
    keyboardType?: KeyboardTypeOptions
    onChange?: (e: string) => any
    width?: number
    /** Pinta a label e a borda do input quando em foco */
    animationOnFocus?: boolean
    animationOnFocusStyle?: {
        color: string
    }
}

/** Componente customizado para input */
export default function CustomInput({
    label = undefined,
    labelStyle = {},
    placeHolder = undefined,
    active = true,
    defaultValue = undefined,
    innerProps = {},
    inputStyle = {},
    keyboardType = "ascii-capable",
    onChange = (_: string) => {},
    width = 150,
    animationOnFocus = true,
    animationOnFocusStyle = {
        color: "blue",
    },
}: CustomInputProps): JSX.Element {
    const [ onFocus, setOnFocus ] = useState<boolean>(false)

    const input = <TextInput
            defaultValue={ defaultValue }
            editable={ active }
            keyboardType={ keyboardType }
            onChangeText={ (e) => { onChange(e) } }
            placeholder={ placeHolder }
            style={{
                borderWidth: 0.5,
                width: width,
                borderColor: animationOnFocus
                    ? onFocus ? animationOnFocusStyle.color : 'black'
                    : 'black',
                ...inputStyle as any
            }}
            onFocus={ () => { setOnFocus(true) } }
            onBlur={ () => { setOnFocus(false) } }
            { ...innerProps }
        />

    if (label) {
        return (
            <View style={ styles.container }>
                <Text style={{
                    fontSize: 14,
                    color: animationOnFocus
                        ? onFocus ? animationOnFocusStyle.color : 'black'
                        : 'black',
                    ...labelStyle as any
                }}>{ label }</Text>
                { input }
            </View>
        )
    }

    return input
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
})