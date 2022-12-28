const mongoose = require('mongoose')
const colors = require('colors')
const users = require('./data/user.data')
const products = require('./data/product.data')
const User = require('./models/user.model')
const Product = require('./models/product.model')
const connectDB = require('./config/db.config')
require('dotenv').config()

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
    
        const createdUsers = await User.insertMany(users)
    
        const adminUser = createdUsers[0]._id
    
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })
    
        await Product.insertMany(sampleProducts)
    
        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
    
const destroyData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
    
        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
    
if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}