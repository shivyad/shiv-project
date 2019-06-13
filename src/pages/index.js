import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/backgroundSection";
import Client from "../components/Home/client";
import Info from "../components/Home/info";
import Service from "../components/Home/service";
import Partner from "../components/Home/partner";
import Testimonial from "../components/Home/testimonial";
import Contact from "../components/Home/contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
    img={data.img.childImageSharp.fluid}
    title="We help innovators build worthwhile products."
    styleClass="default-background"
    />
    <Client />
    <Info />
    <Service />
    <Partner />
    <Testimonial />
    <Contact />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: { eq:
  "default-background.jpg"
  }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;


export default IndexPage;



