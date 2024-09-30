/**
 * Classe responsável pelo gerenciamento geral de responses.
 * TODO: A classe possui propriedades específicas, remover se conveniente.
*/
export default class Response<T> {
    /**
     * Status da requisição.
     * Obtido através do status padrão da response.status.
     * */
    Status: number
    /**
     * Sucesso da requisição.
     * Propriedade personalizada. <- remover se conveniente
     * */
    Success: boolean
    /**
     * Retorno da requisição
     * Propriedade personalizada. <- remover se conveniente
     * */
    Data: T
    /**
     * Mensagem de erro da requisição.
     * Caso a propriedade personalizada "Success" seja falsa, os dados de Data estarão aqui.  <- remover se conveniente
     * */
    ErrorMessage?: string

    constructor(data : any) {
        this.Status = data["status"]
        this.Success = data["success"] ?? true
        this.Data = this.Success ? data["data"] : null
        this.ErrorMessage = this.Success ? null : data["data"]
    }
}