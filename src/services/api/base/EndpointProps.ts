/** Tipo de header esperado */
export type RequestHeader = {
    [key: string]: string
}

/** Propriedades básicas de uma requisição */
export type RequestProps = {
    url: string
    headers?: RequestHeader[]
    authorization?: string
}

/** Propriedades da requisição GET */
export type GetProps = RequestProps

/** Propriedades de requisições com body */
export type SendRequestProps = {
    body?: any
} & RequestProps

/** Propriedades da requisição POST */
export type PostProps = {
    method?: "POST" | "PUT" | "DELETE"
} & SendRequestProps

/** Propriedades da requisição PUT */
export type PutProps = SendRequestProps

/** Propriedades da requisição DELETE */
export type DeleteProps = SendRequestProps