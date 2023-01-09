import React, { useState, useReducer } from 'react'
import Layout from '../layouts/Layout'
import { useLocation } from 'react-router-dom'
import { Form, FormGroup } from 'react-bootstrap'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FormContainer from '../components/formContainer/FormContainer'

const ACTION = {
  HANDLE_TEXT_INPUT: 'HANDLE_TEXT_INPUT',
  HANDLE_NUMBER_INPUT: 'HANDLE_NUMBER_INPUT',
  HANDLE_TOGGLE_CHECKBOX: 'HANDLE_TOGGLE_CHECKBOX',
  // HANDLE_VARIATION_CHANGE: 'HANDLE_VARIATION_CHANGE'
}

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION.HANDLE_TEXT_INPUT:
      return {
        ...state,
        [action.field] : action.payload
      }  
      case ACTION.HANDLE_NUMBER_INPUT:
        return {
          ...state,
          [action.field] : action.payload
        }  
    case ACTION.HANDLE_TOGGLE_CHECKBOX:
      return {
        ...state,
        isNew : !state.isNew
      }
    // case ACTION.HANDLE_VARIATION_CHANGE:
    //   return {
    //     ...state,
    //     [action.field] : action.payload
    //   }
    default:
      return state
  }
}

const initialFormState = {
  sku: '',
  name: '',
  price: 0,
  discount: 0,
  offerEnd: '',
  new: false,
  saleCount: 0,
  category: [],
  tag: [],
  variation: [
    // {
    //   color: '',
    //   image: '',
    //   size: [
    //     {
    //       name: '',
    //       stock: 0
    //     }
    //   ]
    // }
  ],
  image: [],
  shortDescription: '',
  fullDescription: ''
}

const CreateProduct = () => {
  const { pathname } = useLocation()
  const [ formState, dispatch ] = useReducer(formReducer, initialFormState)
  const [ variation, setVariation ] = useState({
    color: '',
    image: null
  })
  const [ addVariation, setAddVariation ] = useState(false)
  
  const handleTextChange = (event) => {
    dispatch({
      type: ACTION.HANDLE_TEXT_INPUT,
      field: event.target.name,
      payload: event.target.value
    })
  }

  const handleNumberChange = (event) => {
    dispatch({
      type: ACTION.HANDLE_NUMBER_INPUT,
      field: event.target.name,
      payload: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState);
  }

  return (
    <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Create Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='sku' className="mt-30">
            <Form.Label>Product SKU</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter product SKU'
              onChange={handleTextChange}
              name='sku'
              value={formState.sku}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='name' className="mt-30">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter product name'
              onChange={handleTextChange}
              name='name'
              value={formState.name}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='price' className="mt-30">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter product price'
              onChange={handleNumberChange}
              name='price'
              value={formState.price}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='name' className="mt-30">
            <Form.Label>Product Discount</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter product discount'
              onChange={handleNumberChange}
              name='discount'
              value={formState.discount}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='offerEnd' className="mt-30">
            <Form.Label>Offer End Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Enter product offer end date'
              onChange={handleNumberChange}
              name='offerEnd'
              value={formState.offerEnd}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='isNew' className="mt-30">
            <Form.Label>New Product</Form.Label>
            <Form.Check
              type='checkbox'
              onChange={() => dispatch({ type: ACTION.HANDLE_TOGGLE_CHECKBOX })}
              checked={formState.isNew}
          ></Form.Check>
          </Form.Group>
          <Form.Group controlId='saleCount' className="mt-30">
            <Form.Label>Product Sale Count</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter product sale count'
              onChange={handleNumberChange}
              name='saleCount'
              value={formState.saleCount}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='category' className="mt-30">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter product category'
              onChange={handleTextChange}
              name='category'
              value={formState.category}
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='tag' className="mt-30">
            <Form.Label>Product Tags</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter product tags'
              onChange={handleTextChange}
              name='tag'
              value={formState.tag}
          ></Form.Control>
          </Form.Group>
          {/* variations */}
            {/* add variation */}
            <button onClick={(e) => setAddVariation(!addVariation)}>+</button>
            {/* color */}
            <FormGroup controlId='color' className='mt-30'>
              <Form.Label>Add color variation</Form.Label>
                <Form.Select aria-label="Default select example" 
                  onChange={(e) => setVariation((prevState) => { 
                    console.log(prevState, e.target.value);
                    return {
                      ...prevState, 
                      color: e.target.value
                    }
                  })} 
                  value={variation.color}
                  name='color'
                  disabled={addVariation ? true : false}
                >
                <option>Select color</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="brown">Brown</option>
              </Form.Select>
            </FormGroup>
            {/* image */}
            <Form.Group controlId="formFile" className="mb-30">
              <Form.Label>Add Variation Photo</Form.Label>
              <Form.Control 
                type="file" 
                value={variation.image}
                onChange={(e) => setVariation((prevState) => {
                  return {
                    ...prevState,
                    image: e.target.value
                  }
                })}
              />
            </Form.Group>
            {/* size */}
              {/* name */}
              {/* stock */}
          {/* add image input */}
          <Form.Group controlId='shortDescription' className="mt-30">
            <Form.Label>Add Product Short Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Product short description'
              onChange={handleTextChange}
              name='shortDescription'
              value={formState.shortDescription}
            />
          </Form.Group>
          <Form.Group controlId='fullDescription' className="mt-30">
            <Form.Label>Add Product Full Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={5}
              placeholder='Product full description'
              onChange={handleTextChange}
              name='fullDescription'
              value={formState.fullDescription}
            />
          </Form.Group>
          <button type='submit' className='create-product-button animated mt-30 mb-30'>Create Product</button>
        </Form>
        </FormContainer>
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
//   offerEnd: DATE
//   new
//   rating
//   saleCount
//   category []
//   tag []
//   variation: [color image size: [name stock]]
//   image
//   shortDescription
//   fullDescription
