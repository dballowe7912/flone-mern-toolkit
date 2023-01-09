import { Fragment } from "react"; 
import { useLocation } from "react-router-dom"; 
import SEO from "../components/seo/seo";
import Layout from "../layouts/Layout";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../components/sectionTitle/SectionTitleWithText";
import Banner from "../components/banner/Banner";
import TextGrid from "../components/textGrid/TextGrid";
import FunFact from "../components/funFact/FunFact";
import TeamMember from "../components/teamMember/TeamMember";
import BrandLogoSlider from "../components/brandLogoSlider/BrandLogoSlider";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of eCommerce template."
      /> 
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "About us", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}
        <Banner spaceBottomClass="pb-70" />

        {/* text grid */}
        <TextGrid spaceBottomClass="pb-70" />

        {/* fun fact */}
        <FunFact
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />

        {/* team member */}
        <TeamMember spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* brand logo slider */}
        <BrandLogoSlider spaceBottomClass="pb-70" />
      </Layout>
    </Fragment>
  );
};

export default About;
