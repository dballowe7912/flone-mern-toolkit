import React, { Fragment, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useLocation } from "react-router-dom"
import SEO from "../components/seo/seo"
import LayoutOne from "../layouts/Layout"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import RelatedProductSlider from "../components/product/RelatedProductSlider"
import ProductDescriptionTab from "../components/product/ProductDescriptionTab"
import ProductImageDescription from "../components/product/ProductImageDescription"
import { fetchProduct, selectProduct, selectProducts } from "../features/product/product-slice"

const Product = () => {
  let { pathname } = useLocation()
  let { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.product)
  
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [])

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        {/* product description with image */}
        { product ? 
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        /> : <div></div> }

        {/* product description tab */}
        { product ? 
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        /> : <div></div> }

        {/* related product slider */}
        { product ? 
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> : <div></div> }
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
