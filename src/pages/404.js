import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"

import { Wrapper, ContentWrapper } from "../components/styles/GlobalStyle"
import Header from "../components/Header"
import { H1, Callout } from "../components/styles/TextStyles"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Header />
      <NotFoundWrapper>
        <NotFoundContentWrapper>
          <H1>404</H1>
          <Callout>The page you're looking for can't be found.</Callout>
        </NotFoundContentWrapper>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage

const NotFoundWrapper = styled(Wrapper)`
  height: 100vh;
`

const NotFoundContentWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`
