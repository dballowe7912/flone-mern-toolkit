import React from "react";
import { Fragment } from "react";
// import SEO from "../../components/seo";
import Layout from "../layouts/Layout";
import HeroSliderOne from "../components/heroSlider/HeroSliderOne";
import FeatureIcon from "../components/featureIcon/FeatureIcon";
import TabProduct from "../components/tabProduct/TabProduct";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
// import { selectProduct, selectProducts } from '../../store/slices/product-slice'

const Home = () => {
  
  return (
    <Fragment>
      {/* <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      /> */}
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </Layout>
    </Fragment>
  );
};

export default Home;
