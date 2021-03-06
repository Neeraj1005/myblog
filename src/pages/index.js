import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicIntro from "../components/basic-intro"
import ProjectSection from "../components/project-section"
import LatestPost from "../components/latest-posts"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BasicIntro />
    <LatestPost />
    <ProjectSection />
  </Layout>
)
export default IndexPage
