import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

type CustomModalProps = { // TODO DOCUMENTAR
    /** Componentes dentro do modal */
    children: JSX.Element | JSX.Element[]
    /** O modal está ativo */
    visible: boolean
    /** SetState para modal ativo */
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    /** Tipo de animação de inicialização e saída do modal */
    animationType?: "none" | "slide" | "fade"
    /** Se o conteúdo em tela permanece visível */
    isTransparent?: boolean
    /** Se o modal pode ser fechado clicando fora do mesmo */
    canOutsideClickClose?: boolean
    /** Borra o fundo do modal */
    blurBackground?: boolean
}

/** Componente customizado para modal */
export default function CustomModal({
    children,
    visible,
    setVisible,
    animationType = "fade",
    isTransparent = true,
    canOutsideClickClose = true,
    blurBackground = true,
}: CustomModalProps) {
    return (
        <Modal
            visible={ visible }
            transparent={ isTransparent }
            animationType={ animationType }
        >
            <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={ 1 }
                onPressOut={() => { if (canOutsideClickClose) setVisible(false) }}
            >
                <View style={{ ...styles.modalBackground, backgroundColor: blurBackground ? 'rgba(0, 0, 0, 0.5)' : 'auto' }}>
                    <TouchableWithoutFeedback>
                        <View style={ styles.modal } pointerEvents="box-none">
                            { children }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})