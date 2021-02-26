import { Request, Response } from 'express'
import vehicleService from '../services/vehicle.service'
import { HTTPResponse } from '../utils/http'

const verifyExistingCar = async (req: Request, res: Response, next: Function) => {
    if (await vehicleService.vehicleExist(req.body.id)) {
        return HTTPResponse.errorResponse({ message: "Failed! Vehicle already exist!", statusCode: 400 }, res)
    } else {
        next()
    }
}

const cantUpdate = async (req: Request, res: Response, next: Function) => {
    if (await vehicleService.vehicleExist(req.body.id)) {
        next()
    } else {
        return HTTPResponse.errorResponse({ message: `Vehicle no found by id: ${req.body.id}`, statusCode: 400 }, res)
    }
}

export { verifyExistingCar, cantUpdate }