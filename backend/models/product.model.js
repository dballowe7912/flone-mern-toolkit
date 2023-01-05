const mongoose = require('mongoose')

const sizeSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        stock: {
            type: Number
        }
    }
)

mongoose.model('size', sizeSchema)

const variationSchema = new mongoose.Schema(
    {
        color: {
            type: String
        },
        image: {
            type: String
        },
        size: {
            // size: [{ name: String, stock: Number }]
            type: [sizeSchema],
            ref: 'size'
        }
    }
)

mongoose.model('variation', variationSchema)


const productSchema = new mongoose.Schema(
    {
        sku: { 
            type: String,
            trim: true
        },
        name: { 
            type: String
        },
        price: { 
            type: Number
        },
        discount: {
            type: Number
        },
        offerEnd: { type: Date },
        new: { type: Boolean },
        rating: { type: Number },
        saleCount: { type: Number },
        category: { type: [String] },
        tag: { type: [String] },
        variation: {
            type: [variationSchema],
            ref: 'variation'
        },
        image: { type: [String] },
        shortDescription: { type: String },
        fullDescription: { type: String }
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model('Product', productSchema);


// variation: [
//     {
//         color: String,
//         image: String,
//         size: [{ name: String, stock: Number }]
//     }
// ],