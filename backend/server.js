const express = require('express')
const connectDB = require('./config/db')
const colors = require('colors')
require('dotenv').config()


const app = express()
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

connectDB()

// middleware
app.use(express.json())

// routes
const productRouter = require('./routes/productRoutes')

app.get('/', (req, res) => {
    res.status(200).json({ msg: "API is running..." })
})

app.use('/api/v1/products', productRouter)

app.listen(
    5000,
    console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode.`)
)