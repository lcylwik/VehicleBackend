import express from 'express'
import { CommonRoutes } from './common.routes'
import VehicleController from '../controllers/vehicle.controller'
import { verifyExistingCar, cantUpdate } from '../middleware/vehicle.middleware'
export class VehicleRoutes extends CommonRoutes {
    constructor(app: express.Application) {
        super(app, 'VehicleRoutes')
    }

    configureRoutes() {
        this.app.route(`/vehicles`)
            .get(VehicleController.listVehicles)
            .post(verifyExistingCar,
                VehicleController.createVehicle)
        

        this.app.route(`/vehicle/:id`)
            .put(cantUpdate,
                VehicleController.updateVehicle)

        return this.app
    }
}