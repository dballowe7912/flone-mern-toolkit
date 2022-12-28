const express = require('express')
const connectDB = require('./config/db.config')
const colors = require('colors')
const { errorHandler } = require('./middleware/error.middleware')
require('dotenv').config()

const app = express()
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

connectDB()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes
const productRouter = require('./routes/product.routes')
const authRouter = require('./routes/auth.routes')

app.get('/', (req, res) => {
    res.status(200).json({ msg: "API is running..." })
})

app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', authRouter)

app.use(errorHandler)

app.listen(
    5000,
    console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode.`)
)