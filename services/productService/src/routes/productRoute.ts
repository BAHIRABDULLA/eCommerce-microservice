import express from 'express'

const router = express.Router()

router.use(express.json())

import productController from '../controller/productController'
const {productAdd,productEdit,getProducts,productDelete}=productController

router.get('/products',getProducts)
router.post('/productAdd',productAdd)
router.post('/productEdit/:id',productEdit)
router.delete('/productDelete/:id',productDelete)


export default router