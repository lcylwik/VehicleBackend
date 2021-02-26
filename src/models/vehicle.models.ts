import mongoose, { Schema, Document } from 'mongoose'

interface IVehicle extends Document {
    id: number
    description: string
    make: string
    modelCar: string
    km: string
    estimateDate: Date
    image: string,
    maintenance: boolean,
    person: string
}

const vehicleSchema: Schema = new mongoose.Schema({
    id: {
        type: Number,
    },
    description: {
        type: String,
    },
    make: {
        type: String,
        required: true
    },
    modelCar: {
        type: String,
        required: true
    },
    km: {
        type: String,
    },
    estimateDate: {
        type: String,
    },
    image: {
        type: String,
    },
    maintenance: {
        type: Boolean,
    },
    person: {
        type: String,
    }
})

export default mongoose.model<IVehicle>('Vehicle', vehicleSchema)