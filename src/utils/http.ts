import { BodyResponse, BodyError } from '../interfaces/http.interface'
import { Response } from 'express'

export const HTTPResponse = {

    successReponse: (data: BodyResponse, res: Response) => {
        console.log('************** SUCCESS RESPONSE ********************')
        const statusCode = data && data.statusCode
        return res
            .status(statusCode || 200)
            .header({
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': false,
                'Access-Control-Allow-Methods': '*'
            })
            .send(data)
    },

    errorResponse: (error: BodyError, res: Response) => {
        console.log('************** ERROR RESPONSE ********************')
        const statusCode = error.statusCode ? error.statusCode : 500
        const message = error.message
        const errorBodyResponse = {
            message
        }
        console.log(errorBodyResponse)

        return res
            .status(statusCode)
            .header({
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': false,
                'Access-Control-Allow-Methods': '*'
            })
            .send(errorBodyResponse);
    }
}