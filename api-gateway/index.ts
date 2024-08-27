import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'


const app = express()

app.use('/users',createProxyMiddleware({target:'http://localhost:3001',changeOrigin:true}))
app.use('/products',createProxyMiddleware({target:'http://localhost:3002',changeOrigin:true}))
app.use('/orders',createProxyMiddleware({target:'http://localhost:3003',changeOrigin:true}))




app.listen(3000,()=>console.log('server running on http://localhost:3000'))