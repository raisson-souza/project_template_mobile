import { ImagePickerImageProps } from "./CameraPicker"
import { Text, Image, ImageProps } from "react-native"

export type CustomImageProps = {
    /** Propriedades da imagem */
    imageProps?: ImagePickerImageProps | null
    /** Referência da imagem */
    alt: string
    /** Exibir referência quando não houver imagem */
    showAlt?: boolean
    width?: number
    height?: number
    /** Propriedades do Image (irão sobrepor as outras) */
    innerProps?: ImageProps
}

/** Componente customizado para exibição de imagens */
export default function CustomImage({
    imageProps,
    alt,
    showAlt = true,
    width = 200,
    height = 200,
    innerProps = {},
}: CustomImageProps) {
    if (imageProps) {
        return <Image
            alt="imagem"
            source={{ uri: imageProps.uri }}
            style={{
                width: width,
                height: height,
            }}
            { ...innerProps }
        />
    }

    if (showAlt)
        return <Text>{ alt }</Text>

    return <></>
}