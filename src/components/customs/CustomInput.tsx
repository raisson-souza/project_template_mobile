import { KeyboardTypeOptions, TextInput, View, TextInputProps, StyleSheet, Text, StyleProp, TextStyle } from "react-native"

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
    onChange = (e: string) => {},
    width = 150,
}: CustomInputProps): JSX.Element {
    const input = <TextInput
            defaultValue={ defaultValue }
            editable={ active }
            keyboardType={ keyboardType }
            onChangeText={ (e) => { onChange(e) } }
            placeholder={ placeHolder }
            style={{
                borderWidth: 0.5,
                width: width,
                ...inputStyle as any
            }}
            { ...innerProps }
        />

    if (label) {
        return (
            <View style={ styles.container }>
                <Text style={{
                    fontSize: 14,
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