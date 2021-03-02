import React from "react"
import styled from "styled-components"
import { ContentWrapper, Wrapper } from "../styles/GlobalStyle"
import { H2 } from "../styles/TextStyles"
//import WaveTest from "./WaveTest"

export default function Design() {
  return (
    <Wrapper>
      <ContentWrapper>
        <H2>Hello, this is a test!</H2>
      </ContentWrapper>
    </Wrapper>
  )
}

const WaveWrapper = styled.div`
  width: 100%;
  position: absolute;
  //bottom: 0;
`
