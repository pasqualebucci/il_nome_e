import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChiSiamo from "../components/home/chisiamo"
import CosaFacciamo from "../components/home/cosafacciamo"
import CallToAction1 from "../components/home/calltoaction1"
import CampagneAttive from "../components/home/campagneAttive"
import CallToAction2 from "../components/home/calltoaction2"
import News from "../components/home/news"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ChiSiamo />
    <CosaFacciamo />
    <CallToAction1 />
    <CampagneAttive />
    <CallToAction2 />
    <News />
  </Layout>
)

export default IndexPage
