const express = require('express')
const connectDB = require('./config/db.config')
const colors = require('colors')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

const app = express()
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

var corsOptions = {
    origin: "http://localhost:3000"
};

connectDB()

// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(
    createProxyMiddleware("/", {
      target: "http://127.0.0.1:3000",
    })
);


// routes
const productRouter = require('./routes/product.routes')
const authRouter = require('./routes/auth.routes')

app.get('/', (req, res) => {
    res.status(200).json({ msg: "API is running..." })
})

app.use('/api/v1/products', productRouter)
app.use('/api/v1/auth', authRouter)

app.listen(
    5000,
    console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode.`)
)