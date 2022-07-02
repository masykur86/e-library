import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import buku from './data/bukuData.js'
import peraturan from './data/peraturan.js'
import referensi from './data/referensi.js'
import Users from './models/userModel.js'
import Perpus from './models/perpusModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // await Users.deleteMany()

    // const createdUsers = await Users.insertMany(users)
    // const adminUser = createdUsers[0]._id
    await Perpus.insertMany(peraturan)
    await Perpus.insertMany(buku)
    await Perpus.insertMany(referensi)

    console.log('data di import')
  } catch (error) {
    console.error(`${error}`)
  }
}

const destroyData = async () => {
  try {
    // await Users.deleteMany()
    await Perpus.deleteMany()

    console.log('data di hapus')
  } catch (error) {
    console.error(`${error}`)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
