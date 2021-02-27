import { Request, Response } from 'express'
import { IVehicle } from '../interfaces/vehicle.interface'
import vehicleService from '../services/vehicle.service'
import { HTTPResponse } from '../utils/http'
class VehicleController {
    private static instance: VehicleController

    static getInstance(): VehicleController {
        if (!VehicleController.instance) {
            VehicleController.instance = new VehicleController()
        }
        return VehicleController.instance
    }

    async listVehicles(req: Request, res: Response) {
        try {
            console.log('****** List Vehicles ******', req.params)
            const vehicles = await vehicleService.list()
            return HTTPResponse.successReponse({data: vehicles}, res)
        } catch (error) {
            const message = error.message || 'Error Listing Vehicles'
            return HTTPResponse.errorResponse({ message }, res)
        }
    }

    async createVehicle(req: Request, res: Response) {
        try {
            console.log('****** Create Vehicle ******', req.body)
            const data: IVehicle = req.body
            const newVehicle = await vehicleService.create(data)
            return HTTPResponse.successReponse({data: newVehicle}, res)
        } catch (error) {
            console.log(error)
            const message = error.message || 'Error Creating Vehicles'
            return HTTPResponse.errorResponse({ message }, res)
        }
    }

    async updateVehicle(req: Request, res: Response) {
        try {
            console.log('****** Update Vehicle ******', req.body)
            const body: IVehicle = req.body
            const id: string = req.params.id || ''
            const newVehicle = await vehicleService.findByIdAndUpdate(id, body) || {}
            return HTTPResponse.successReponse({ data: newVehicle }, res)
        } catch (error) {
            console.log(error)
            const message = error.message || 'Error Updating Vehicles'
            return HTTPResponse.errorResponse({ message }, res)
        }
    }

}

export default VehicleController.getInstance()