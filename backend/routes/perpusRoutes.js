import express from 'express'
const router = express.Router()
import {
  getperpus,
  getPerpusById,
  deleteProduct,
  createProduct,
  updatePerpus,
} from '../controllers/perpusController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getperpus).post(protect, createProduct)

router
  .route('/:id')
  .get(getPerpusById)
  .put(protect, updatePerpus)
  .delete(protect, deleteProduct)
export default router
