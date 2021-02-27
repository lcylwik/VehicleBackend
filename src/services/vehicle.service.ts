
import VehicleModel from '../models/vehicle.models'
import { IVehicle } from '../interfaces/vehicle.interface'
class VehicleService {
    private static instance: VehicleService

    static getInstance(): VehicleService {
        if (!VehicleService.instance) {
            VehicleService.instance = new VehicleService()
        }
        return VehicleService.instance
    }

    async list() {
        return await VehicleModel.find({})
    }

    async create(data: IVehicle) {
        return await VehicleModel.create(data)
    }

    async findByIdAndUpdate(id: string, data: IVehicle) {
        return await VehicleModel.findByIdAndUpdate(id, data,  { new: true }).exec()
    }

    async vehicleExist(id: number) {
        if (id) {
            const vehicle = await VehicleModel.find({ id })
            console.log(vehicle)
            return vehicle.length > 0
        }
        return false
    }
}

export default VehicleService.getInstance()