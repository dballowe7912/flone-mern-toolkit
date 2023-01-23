const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const morgan = require('morgan')
const colors = require('colors')

const connectDB = require('./config/db.config')

/* ROUTERS */
const productRouter = require('./routes/product.routes')
const authRouter = require('./routes/auth.routes')


/* MIDDLEWARES */
const { errorHandler } = require('./middleware/error.middleware')

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', authRouter)
app.use(errorHandler)

/* ENV VARIABLES */
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () => {
        console.log(`Server is listening in ${NODE_ENV} mode on port ${PORT}...`);
      });
    } catch (error) {
      console.log(error);
    }
};

start()