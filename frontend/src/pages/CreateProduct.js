import React, { useState } from 'react'
import Layout from '../layouts/Layout'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import { useLocation } from 'react-router-dom'

const CreateProduct = () => {
  const { pathname } = useLocation()

  const [ newProductData, setNewProductData ] = useState({
    sku: '',
    name: '',
    price: 0,
    discount: 0,
    offerEnd: '',
    isNew: false,
    saleCount: 0,
    category: [],
    tag: [],
    variation: [],
    image: [],
    shortDescription: '',
    fullDescription: ''
  })

  const {
    sku,
    name,
    price,
    discount,
    offerEnd,
    isNew,
    saleCount,
    category,
    tag,
    variation,
    image,
    shortDescription,
    fullDescription
  } = newProductData

  return (
    <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Create Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <form>
          <input type="text" placeholder='Enter product sku' value={sku} name="sku"/>
          <input type="text" placeholder='Enter product name' value={name} name="name"/>
          <input type="number" placeholder='Enter product price' value={price} name="price"/>
          <input type="number" placeholder='Enter product discount' value={discount} name="discount"/>
          <input type="date" placeholder='Enter products offer end date' value={offerEnd} name="offerEnd"/>
          <label htmlFor='isNew'>Set product as new
          <input type="checkbox" value={isNew} name="isNew"/>
          </label>
          <input type="number" placeholder='Enter product sale count' value={saleCount} name="saleCount" />
          <input type="string" placeholder='Enter product category' value={category} name="category" />
          <input type="string" placeholder='Enter product tags' value={tag} name="tag" />
          <input type="string" placeholder='Enter product variation' value={variation} name="variation" />
          <input type="string" placeholder='Enter products short description' value={shortDescription} name="shortDescription" />
          <input type="string" placeholder='Enter products full description' value={fullDescription} name="image" />
        </form>
    </Layout>
  )
}

export default CreateProduct

// {
//   sku: { 
//       type: String,
//       trim: true
//   },
//   name: { 
//       type: String
//   },
//   price: { 
//       type: Number
//   },
//   discount: {
//       type: Number
//   },
//   offerEnd: { type: Date },
//   new: { type: Boolean },
//   rating: { type: Number },
//   saleCount: { type: Number },
//   category: { type: [String] },
//   tag: { type: [String] },
//   variation: {
//       type: mongoose.Schema.Types.Array,
//       ref: 'variation'
//   },
//   image: { type: [String] },
//   shortDescription: { type: String },
//   fullDescription: { type: String }
// },