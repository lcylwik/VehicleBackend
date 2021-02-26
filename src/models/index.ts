import mongoose from 'mongoose'
mongoose.Promise = global.Promise
class DB {
  private static instance: DB

  static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB.instance
  }

  async connect() {
    const host = process.env.DB_HOST
    const port = process.env.DB_PORT
    const db = process.env.DB_DB

    try {
      await mongoose.connect(`mongodb://${host}:${port}/${db}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })

      console.info("Successfully connect to MongoDB.")

    } catch (err) {
      console.error("MongoDB: Connection error", err)
      process.exit(0)
    }
  }
}

export default DB.getInstance()