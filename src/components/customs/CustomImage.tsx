import { Image } from "react-native"

type CustomImageTypes = {
    Local: (props: LocalCustomImageProps) => JSX.Element
    Online: (props: OnlineCustomImageProps) => JSX.Element
}

/** Tipagem para custom image de imagens locais */
type LocalCustomImageProps = {
    /**
     * Uso da função require para retornar o caminho da imagem
     * @example require("./app_logo.png")
     * */
    filePathByRequire: any
} & CustomImageProps

/** Tipagem para custom image de imagens online */
type OnlineCustomImageProps = {
    /**
     * URL da imagem online
     * @example url="https://site/image.png"
     * */
    url: string
} & CustomImageProps

type CustomImageProps = {
    width?: number
    height?: number
}

/**
 * Componente customizado para exibição de imagens locais ou online
 * @example <CustomImage.Local filePathByRequire={ require("../assets/app_logo.png") }
 * @example <CustomImage.Online url="https://site/image.png"
 * */
export const CustomImage: CustomImageTypes = {
    Local: ({ filePathByRequire, height = 200, width = 200 }: LocalCustomImageProps) => {
        return <Image
            alt="custom_local_image"
            source={ filePathByRequire }
            style={{
                width: width,
                height: height,
            }}
        />
    },
    Online: ({ url, height = 200, width = 200 }: OnlineCustomImageProps) => {
        return <Image
            alt="custom_online_image"
            source={{ uri: url }}
            style={{
                width: width,
                height: height,
            }}
        />
    },
}