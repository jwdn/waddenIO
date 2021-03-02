import React from "react"
import Header from "../components/Header"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
    </Layout>
  )
}

export default IndexPage
