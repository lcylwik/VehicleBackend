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
    const { DB_HOST, DB_PORT, DB_DB } = process.env

    try {
      await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DB}`, {
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