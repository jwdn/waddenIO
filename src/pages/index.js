import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import WaveTest from "../components/sections/WaveTest"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
      <WaveTest />
      <Footer />
    </Layout>
  )
}

export default IndexPage
