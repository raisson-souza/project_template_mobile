import { SQLiteDatabase } from "expo-sqlite"

/** Verifica e popula os dados do banco de dados SQL lite conforme necessário */
export default async function Migrations(db: SQLiteDatabase): Promise<void> {
    // TESTE DEV
    // Derruba tabela para simular primeiro acesso
    // await db.execAsync("DROP TABLE xxx")
    // Seta a versão do usuário para 0, simulando primeiro acesso
    // await db.execAsync("PRAGMA user_version = 0")
    // TESTE DEV

    /**
     * Versão atual do banco de dados  
     * Atualizar a cada nova modificação no banco
     */
    const DATABASE_VERSION = 1

    /** Busca-se a versão atual do banco de dados */
    const userVersion: number | null = await db.getFirstAsync<{ user_version: number }>("PRAGMA user_version")
        .then(result => { return result ? result.user_version : null })
        .catch((ex) => {
            console.log(`Erro ao conectar-se no banco`, (ex as Error).message)
            return null
        })

    // O banco existe
    if (userVersion || userVersion === 0) {
        // O banco está devidamente atualizado
        if (userVersion >= DATABASE_VERSION) {
            console.log(`Banco já atualizado: ${ userVersion } de ${ DATABASE_VERSION }.`)
            return
        }

        console.log(`Banco não atualizado: ${ userVersion } de ${ DATABASE_VERSION }.`)
        console.log("Iniciando atualizações.")
        let newUserVersion = userVersion

        if (newUserVersion === 0) {
            // POPULAR BANCO DE DADOS COM TABELAS DA VERSÃO 1 (validar com transaction)
            // await db.execAsync("")
            // newUserVersion = 1
        }

        if (newUserVersion === 1) {
            // POPULAR BANCO DE DADOS COM TABELAS DA VERSÃO 2 (validar com transaction)
            // await db.execAsync("")
            // newUserVersion = 2
        }

        // Criar mais população de versões conforme necessário...

        /** Nova versão do banco do usuário é aplicada */
        // await db.execAsync(`PRAGMA version = ${ DATABASE_VERSION }`)
        console.log(`Banco atualizado. ${ newUserVersion } de ${ DATABASE_VERSION }.`)
    }
}