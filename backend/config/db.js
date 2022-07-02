import mongoose from 'mongoose'
mongoose.Promise = global.Promise

// Connect MongoDB at default port 27017.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(process.env.MONGO_URI)
    console.log(`'MongoDB Connection Succeeded.' ${conn.connection.host}`)
  } catch (error) {
    console.log(`'${error.message}'`)
  }
}

export default connectDB
