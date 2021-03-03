import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { ContentWrapper, Wrapper, TextWrapper } from "../styles/GlobalStyle"
import { H2, Body } from "../styles/TextStyles"

export default function Intro() {
  return (
    <IntroWrapper>
      <IntroContentWrapper>
        <IntroTextWrapper>
          <Heading>
            Designing and building great apps that bring your ideas to life.
          </Heading>
          <IntroBody>
            I’m a UI Designer and Web Developer living in Halifax, NS Canada.
            <br /> I'm a recent Bachelor of Computer Science graduate, and I
            can’t wait to see what we can build together.
          </IntroBody>
        </IntroTextWrapper>
      </IntroContentWrapper>
    </IntroWrapper>
  )
}

const IntroWrapper = styled(Wrapper)`
  background-color: ${themes.default.pink};
  position: relative;
`

const IntroTextWrapper = styled(TextWrapper)`
  justify-content: center;
  gap: 18px;
`

const IntroContentWrapper = styled(ContentWrapper)`
  grid-template-columns: 1fr;
`

const Heading = styled(H2)`
  text-align: center;
  background: ${themes.fancy.darkBlueGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const IntroBody = styled(Body)`
  text-align: center;
  color: ${themes.default.darkblue};
`
