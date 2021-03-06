import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { ContentWrapper, Wrapper, TextWrapper } from "../styles/GlobalStyle"
import { H1, Callout } from "../styles/TextStyles"

export default function Hero() {
  return (
    <Wrapper>
      <HeroContentWrapper>
        <HeroTextWrapper>
          <Title>
            Hey! I'm <span>Jon.</span>
          </Title>
          <Subtitle>
            I design and build neat stuff for the digital world.
          </Subtitle>
        </HeroTextWrapper>
      </HeroContentWrapper>
    </Wrapper>
  )
}

const HeroTextWrapper = styled(TextWrapper)`
  justify-content: center;
  gap: 18px;
`

const HeroContentWrapper = styled(ContentWrapper)`
  grid-template-columns: 1fr;

  height: 60vh;
  padding-top: 60%;
  padding-bottom: 10%;

  @media screen and (min-width: 768px) {
    padding-top: 35%;
    padding-bottom: 20%;
  }
  @media screen and (min-width: 1032px) {
    height: 65vh;
    padding-top: 50%;
  }
`

const Title = styled(H1)`
  text-align: center;
  span {
    background: ${themes.fancy.pinkGradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`

const Subtitle = styled(Callout)`
  text-align: center;
`
