import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Hero from "../components/sections/Hero"
import Intro from "../components/sections/Intro"

import WaveUp from "../components/sections/WaveUp"
import WaveDn from "../components/sections/WaveDn"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
      <Hero />
      <WaveUp color={"#ff66cc"} />
      <Intro />
      <WaveDn color={"#ff66cc"} />
      <Footer />
    </Layout>
  )
}

export default IndexPage
