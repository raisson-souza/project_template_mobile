import { SQLiteDatabase } from "expo-sqlite"

/** Função especializada na verificação e atualização do banco de dados SQL lite local */
export default async function SqliteDbManager(db: SQLiteDatabase): Promise<void> {
    // TESTE DEV
    // Derrubar todas as tabelas da aplicação
    // await db.execAsync("DROP TABLE xxx")
    // Setar a versão do usuário para 0, simulando primeiro acesso
    // await db.execAsync("PRAGMA user_version = 0")
    // Conforme SqliteDbManager, todas as tabelas serão recriadas
    // TESTE DEV

    /**
     * Versão atual do banco de dados  
     * É necessário atualizar a cada nova modificação no banco
     */
    const DATABASE_VERSION = 1

    try {
        /** Busca-se a versão atual do banco de dados */
        const userVersion: number = await db.getFirstAsync<{ user_version: number }>("PRAGMA user_version")
            .then(result => { return result ? result.user_version : 0 })

        // O banco está devidamente atualizado
        if (userVersion >= DATABASE_VERSION) {
            console.log(`BANCO DE DADOS JÁ ATUALIZADO v${ DATABASE_VERSION }`)
            return
        }

        console.log(`BANCO DE DADOS ${ userVersion } / ${ DATABASE_VERSION }.`)
        let newUserVersion = userVersion

        if (newUserVersion === 0) {
            // POPULAR BANCO DE DADOS COM TABELAS DA VERSÃO 1 (utilizar transaction)
            // newUserVersion = 1
        }

        if (newUserVersion === 1) {
            // POPULAR BANCO DE DADOS COM TABELAS DA VERSÃO 2 (utilizar transaction)
            // newUserVersion = 2
        }

        // Nova versão do banco do usuário é aplicada
        await db.execAsync(`PRAGMA user_version = ${ newUserVersion }`)
        console.log(`BANCO DE DADOS ATUALIZADO v${ newUserVersion }`)
    } catch (ex) {
        console.log(`Ocorreu um erro ao atualizar o banco de dados: ${ (ex as Error).message }`)
    }
}