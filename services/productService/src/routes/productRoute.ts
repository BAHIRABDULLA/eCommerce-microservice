import express from 'express'

const router = express.Router()

import productController from '../controller/productController'
const {productAdd,productEdit}=productController
router.post('/productAdd',productAdd)


export default router