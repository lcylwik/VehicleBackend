import express from 'express'
import { json, urlencoded } from 'body-parser'
import { Server, createServer} from 'http'
import cors from 'cors'
import { CommonRoutes } from './routes/common.routes'
import { VehicleRoutes } from './routes/vehicle.routes'
import DB from './models/index'

const app: express.Application = express()
const server: Server = createServer(app)
const routes: Array<CommonRoutes> = []

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
routes.push(new VehicleRoutes(app))

DB.connect()

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`)
  routes.forEach((route: CommonRoutes) => {
    console.log(`Routes configured for ${route.getName()}`)
  })
})
