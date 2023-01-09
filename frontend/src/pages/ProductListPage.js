import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, fetchProducts } from '../features/product/product-slice'
import { useNavigate } from 'react-router-dom'

import { Table, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Layout from "../layouts/Layout"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const ProductListPage = () => {
    const { pathname } = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)  

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Product List Page", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <Table>
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.sku}</td>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
        </Layout>
    )
}

export default ProductListPage