import React, { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useLocation } from "react-router-dom"
import SEO from "../components/seo/seo"
import Layout from "../layouts/Layout"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import RelatedProductSlider from "../components/product/RelatedProductSlider"
import ProductDescriptionTab from "../components/product/ProductDescriptionTab"
import ProductImageDescription from "../components/product/ProductImageDescription"
import { listProductDetails } from "../features/product/product-slice"
import { selectProduct } from "../features/product/product-slice"

const Product = () => {
  let { pathname } = useLocation()
  let { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(selectProduct)

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of eCommerce template."
      />

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        { product && 
        <>
          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={product}
          />

          <ProductDescriptionTab
            spaceBottomClass="pb-90"
            productFullDesc={product.fullDescription}
          />

          <RelatedProductSlider
            spaceBottomClass="pb-95"
            category={product.category[0]}
          /> 
        </> }
      </Layout>
    </Fragment>
  );
};

export default Product;
