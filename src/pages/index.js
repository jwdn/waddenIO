import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Hero from "../components/sections/Hero"
import Intro from "../components/sections/Intro"
import Design from "../components/sections/Design"
import Responsive from "../components/sections/Responsive"
import Beyond from "../components/sections/Beyond"
import Contact from "../components/sections/Contact"

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
      <Design />
      <Responsive />
      <Beyond />
      <WaveUp color={"#66ffcc"} />
      <Contact id="contact" />
      <WaveDn color={"#66ffcc"} />
      <Footer />
    </Layout>
  )
}

export default IndexPage
