import { Button } from "react-native"
import { CustomButtonProps } from "./CustomButton"
import * as ImagePicker from "expo-image-picker"
import React from "react"

export type ImagePickerImageProps = {
    base64?: string | null
    uri: string
    fileName?: string | null
    fileSizeBytes?: number
    width?: number
    height?: number
    mimeType?: string
}

type CameraLaunchProps = {
    allowsEditing?: boolean
    aspect?: [number, number]
    quality?: number
    cameraType?: "front" | "back"
}

type CameraPickerProps = {
    cameraLaunchProps?: CameraLaunchProps
    setImage: React.Dispatch<React.SetStateAction<ImagePickerImageProps | null>>
    btnProps?: CustomButtonProps
}

/** Botão acionador de câmera */
export default function CameraPicker({
    cameraLaunchProps = {
        allowsEditing: true,
        aspect: [4,3],
        quality: 0.3,
        cameraType: "back",
    },
    setImage,
    btnProps = {
        title: "Acessar Câmera",
        onPress: () => { },
    },
}: CameraPickerProps): JSX.Element {
    const onPress = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        if (!granted) {
            alert("Permissão de uso de câmera negada.")
            return
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: cameraLaunchProps.allowsEditing,
            aspect: cameraLaunchProps.aspect,
            quality: cameraLaunchProps.quality,
            base64: true,
            cameraType: cameraLaunchProps.cameraType === "back"
                ? ImagePicker.CameraType.back
                : ImagePicker.CameraType.front,
        })

        if (!result.canceled) {
            setImage({
                base64: result.assets[0].base64,
                uri: result.assets[0].uri,
                fileName: result.assets[0].fileName,
                fileSizeBytes: result.assets[0].fileSize,
                width: result.assets[0].width,
                height: result.assets[0].height,
                mimeType: result.assets[0].mimeType,
            })
        }
    }

    return <Button title={ btnProps.title } onPress={ onPress } />
}