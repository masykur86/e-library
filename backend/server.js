import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import perpusRoutes from './routes/perpusRoutes.js'
import morgan from 'morgan'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
const app = express()

dotenv.config()
connectDB()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/perpus', perpusRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('api is running......')
  })
}

// mengetahui rute salah
app.use(notFound)
// middelware untuk custom error handling (untuk mode development)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`'server running ini'${process.env.NODE_ENV} on port ${PORT}`)
)
