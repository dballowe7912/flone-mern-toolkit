import React, { useEffect, useState, useReducer } from 'react'
import FormContainer from '../components/formContainer/FormContainer'
import { Form, Button } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { listProductDetails } from '../features/product/product-slice'
import { useSelector, useDispatch } from 'react-redux'

const ProductEditPage = () => {
    const productDetails = useSelector((state) => state.product.product.product)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [ sku, setSku ] = useState(productDetails ? productDetails.sku : '')
    const [ name, setName ] = useState(productDetails ? productDetails.name : '')
    const [ price, setPrice ] = useState(productDetails ? productDetails.price : 0)
    const [ discount, setDiscount ] = useState(productDetails ? productDetails.discount : 0)
    const [ isNew, setIsNew ] = useState(productDetails ? productDetails.isNew : false)
    const [ rating, setRating ] = useState(productDetails ? productDetails.rating : 0)
    const [ saleCount, setSaleCount ] = useState(productDetails ? productDetails.saleCount : 0)
    const [ category, setCategory ] = useState(productDetails ? productDetails.category : '')
    const [ tag, setTag ] = useState(productDetails ? productDetails.tag : '')
    const [ image, setImage ] = useState(productDetails ? productDetails.image : '')
    const [ countInStock, setCountInStock ] = useState(productDetails && productDetails.stock ? productDetails.stock : 0)
    const [ shortDescription, setShortDescription ] = useState(productDetails ? productDetails.shortDescription : '')
    const [ fullDescription, setFullDescription ] = useState(productDetails ? productDetails.fullDescription : '')

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])

    // variation
    // const [ variation, setVariation ] = useState({
    //     color: '',
    //     image: '',
    //     size: [],
    // })

    // const [ sizeVariation, setSizeVariation ] = useState({
    //     name: '',
    //     stock: 0
    // })
    
    const [ uploading, setUploading ] = useState(false)

    // const handleChange = (e) => {
        
    // }
    
    const submitHandler = (e) => {
        e.preventDefault()

        console.log('submitted')
    }

    return (
        <>
            <Link to='/admin/productlist' className='btn btn-light my-3'>
            Go Back
        </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {/* {loadingUpdate && <Loader />} */}
                {/* {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>} */}
                {/* {loading ? ( */}
                {/* <Loader /> */}
                {/* ) : error ? ( */}
                {/* <Message variant='danger'>{error}</Message> */}
                {/* ) : ( */}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='sku' className="mt-30">
                        <Form.Label>SKU</Form.Label>
                        <Form.Control
                            type='string'
                            placeholder={productDetails && productDetails.sku}
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='name' className="mt-30">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder={productDetails && productDetails.name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price' className="mt-30">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder={productDetails && productDetails.price}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                
                    <Form.Group controlId='discount' className="mt-30">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder={productDetails && productDetails.discount}
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    {/* make radio button */}
                    <Form.Group controlId='isNew' className="mt-30">
                        <Form.Label>New Product</Form.Label>
                        <Form.Check
                            type='checkbox'
                            placeholder='New Product'
                            // value={isNew}
                            onChange={(e) => setIsNew(e.target.value)}
                            checked={isNew}
                        ></Form.Check>
                    </Form.Group>

                    <Form.Group controlId='image' className="mt-30">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder={productDetails && productDetails.image}
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        ></Form.Control>
                    {/* <Form.File
                        id='image-file'
                        label='Choose File'
                        custom
                        onChange={uploadFileHandler}
                    ></Form.File>
                    {uploading && <Loader />} */}
                    </Form.Group>

                    {/* should initial rating be maintainable?? */}
                    <Form.Group controlId='rating' className="mt-30">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder={productDetails && productDetails.rating}
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='saleCount' className="mt-30">
                        <Form.Label>Number of Sold</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder={productDetails && productDetails.saleCount}
                            value={saleCount}
                            onChange={(e) => setSaleCount(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='countInStock' className="mt-30">
                        <Form.Label>Count In Stock</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder={productDetails && productDetails.stock}
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='category' className="mt-30">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder={productDetails && productDetails.category}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='tag' className="mt-30">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder={productDetails && productDetails.tag}
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className="mt-30">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder={productDetails && productDetails.shortDescription}
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className="mt-30">
                        <Form.Label>Full Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder={productDetails && productDetails.fullDescription}
                            value={fullDescription}
                            onChange={(e) => setFullDescription(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className="mt-30">
                    Update
                    </Button>
                </Form>
                {/* )} */}
            </FormContainer>
        </>
    )
}

export default ProductEditPage