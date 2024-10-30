/** Tipo esperado no construtor da classe Response */
type ResponseProps = {
    /** Dados recebidos da requisição */
    data: any
    /** Status da requisição */
    status: number
    /** mensagem de erro da excessão */
    fetchError?: string
}

/**
 * Classe responsável pelo gerenciamento geral de responses.  
 * A classe possui propriedades específicas, remover se conveniente.
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
     * Retorno da requisição.  
     * Propriedade personalizada. <- remover se conveniente
     * */
    Data: T
    /**
     * Mensagem de erro padrão caso erro no fetch
     * Propriedade personalizada. <- remover se conveniente
    */
    ErrorMessage?: string

    constructor({ data, status, fetchError }: ResponseProps) {
        this.Status = status
        this.Success = status < 400
        this.Data = data
        this.ErrorMessage = fetchError
    }
}