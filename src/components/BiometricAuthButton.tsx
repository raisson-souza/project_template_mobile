import { Button } from "react-native"
import * as LocalAuthentication from 'expo-local-authentication'
import React from "react"

type BiometricAuthButtonProps = {
    /** Mensagem da solicitação de biometria */
    authMessage?: string
    /** Mensagem do botão para cancelar biometria */
    cancelAuthTitle?: string
    /** Título do botão PROP TEMPORÁRIA */
    btnTitle?: string
    /** Permite autenticação por PIN */
    allowPinAuth?: boolean
    /** Ação após sucesso */
    onSuccess?: () => any
    /** Ação após falha */
    onFailure?: () => any
    /** State indicando suceso na autenticação */
    authSuccess: boolean
    /** Set State do sucesso na autenticação */
    setAuthSuccess: React.Dispatch<React.SetStateAction<boolean>>
    /** Propriedade especial para as props do botão customizado */
    btnProps?: never
}

export default function BiometricAuthButton({
    authMessage = "Confirmar ação",
    cancelAuthTitle = "Cancelar",
    btnTitle = "Confirmar",
    allowPinAuth = true,
    onSuccess = () => {},
    onFailure = () => {},
    authSuccess,
    setAuthSuccess,
}: BiometricAuthButtonProps): JSX.Element {
    const onPress = async () => {
        if (authSuccess) return

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: authMessage,
            cancelLabel: cancelAuthTitle,
            biometricsSecurityLevel: "strong",
            disableDeviceFallback: !allowPinAuth,
        })

        if (auth.success || auth.warning === "KeyguardManager#isDeviceSecure() returned false") {
            setAuthSuccess(true)
            await onSuccess()
            return
        }

        await onFailure()
    }

    // TODO: Trocar botão pelo botão customizado
    return (
        <Button
            title={ btnTitle }
            disabled={ authSuccess }
            onPress={ onPress }
        />
    )
}