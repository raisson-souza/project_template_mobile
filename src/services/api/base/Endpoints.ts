import { DeleteProps, GetProps, PostProps, PutProps, RequestHeader } from "./EndpointProps"
import env from "../../../config/env"
import Response from "./Response"

export default abstract class Endpoints {
    /** Header padrão das requisições */
    private static defaultHeader: RequestHeader = { 'Content-Type': 'application/json' }

    /**
     * Monta todos os headers de uma requisição
     * @param requestHeaders Lista de headers de uma requisição
     * @param authorization Autorização da requisição
     * @returns Retorna uma sequência de headers
     */
    private static mountHeaders = (requestHeaders: RequestHeader[], authorization?: string): any => {
        if (authorization)
            requestHeaders.push({ "Authorization": authorization })

        return requestHeaders.reduce((previousHeader, currentHeader) => {
            return { ...previousHeader, ...currentHeader }
        }, {} as any)
    }

    /** Requisição GET */
    protected static async Get<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined
    }: GetProps): Promise<Response<T>> {
        try {
            return await fetch(
                `${ env.BackendUrl() }${ url }`,
                {
                    method: 'GET',
                    headers: this.mountHeaders(headers, authorization)
                }
            )
                .then(async (response) => {
                    const json = await response.json()
                    return new Response<T>({ data: json, status: response.status })
                })
        }
        catch (ex) {
            return new Response<T>({ data: "", status: 500, fetchError: (ex as Error).message })
        }
    }

    /** Requisição POST */
    protected static async Post<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
        body = {},
        method = 'POST',
    }: PostProps): Promise<Response<T>> {
        try {
            return await fetch(
                `${ env.BackendUrl() }${ url }`,
                {
                    method: method,
                    headers: this.mountHeaders(headers, authorization),
                    body: JSON.stringify(body)
                }
            )
                .then(async (response) => {
                    const json = await response.json()
                    return new Response<T>({ data: json, status: response.status })
                })
        }
        catch (ex) {
            return new Response<T>({ data: "", status: 500, fetchError: (ex as Error).message })
        }
    }

    /** Requisição PUT */
    protected static async Put<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
        body = {}
    }: PutProps): Promise<Response<T>> {
        return await this.Post<T>({
            url,
            headers,
            authorization,
            body,
            method: "PUT"
        })
    }

    /** Requisição DELETE */
    protected static async Delete<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
        body = {}
    }: DeleteProps): Promise<Response<T>> {
        return await this.Post<T>({
            url,
            headers,
            authorization,
            body,
            method: "DELETE"
        })
    }
}