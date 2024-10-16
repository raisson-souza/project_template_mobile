import React from "react"
import { Alert, Button } from "react-native"
import * as ImagePicker from "expo-image-picker"

export type ImagePickerImageProps = {
    base64?: string | null
    uri: string
    fileName?: string | null
    fileSizeBytes?: number
    width: number
    height: number
    mimeType?: string
}

type CameraLaunchProps = {
    allowsEditing: boolean
    aspect: [number, number]
    quality: number
    base64: boolean
    allowsMultipleSelection: boolean
    selectionLimit: number
    cameraType: ImagePicker.CameraType
    legacy: boolean
}

type CameraPickerProps = {
    cameraLaunchProps?: CameraLaunchProps
    images: ImagePickerImageProps[]
    setImages: React.Dispatch<React.SetStateAction<ImagePickerImageProps[]>>
    btnTitle?: string
    btnProps?: never
}

export default function CameraPicker({
    cameraLaunchProps = {
        allowsEditing: true,
        aspect: [4,3],
        quality: 0.3,
        base64: true,
        allowsMultipleSelection: false,
        selectionLimit: 1,
        cameraType: ImagePicker.CameraType.back,
        legacy: false,
    },
    images,
    setImages,
    btnTitle = "Acessar Câmera",
}: CameraPickerProps): JSX.Element {
    const onPress = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        console.log("granted", granted)

        if (!granted) {
            alert("Permissão de uso de câmera negada.")
            return
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: cameraLaunchProps.allowsEditing,
            aspect: cameraLaunchProps.aspect,
            quality: cameraLaunchProps.quality,
            base64: cameraLaunchProps.base64,
            allowsMultipleSelection: cameraLaunchProps.allowsMultipleSelection,
            selectionLimit: cameraLaunchProps.selectionLimit,
            cameraType: cameraLaunchProps.cameraType,
            legacy: cameraLaunchProps.legacy,
        })
        console.log("result", result)

        if (!result.canceled) {
            let images: ImagePickerImageProps[]

            if (cameraLaunchProps.allowsMultipleSelection) {
                images = result.assets.map(asset => {
                    return {
                        base64: asset.base64,
                        uri: asset.uri,
                        fileName: asset.fileName,
                        fileSizeBytes: asset.fileSize,
                        width: asset.width,
                        height: asset.height,
                        mimeType: asset.mimeType,
                    } as ImagePickerImageProps
                })
            }
            else {
                images = [{
                    base64: result.assets[0].base64,
                    uri: result.assets[0].uri,
                    fileName: result.assets[0].fileName,
                    fileSizeBytes: result.assets[0].fileSize,
                    width: result.assets[0].width,
                    height: result.assets[0].height,
                    mimeType: result.assets[0].mimeType,
                }]
            }

            setImages(images)
        }
    }

    return <Button title={ btnTitle } onPress={ onPress } />
}