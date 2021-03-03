import React from "react"
import styled from "styled-components"
import {
  ContentWrapper,
  Wrapper,
  TextWrapper,
  ImageWrapper,
} from "../styles/GlobalStyle"
import { themes } from "../styles/ColorStyles"
import { H2, Body } from "../styles/TextStyles"

export default function Beyond() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Heading>
            Building <span>beyond </span>the browser.
          </Heading>
          <BodyText>
            Outside of building web apps with React, I have experience with a
            whole bunch of platforms and languages. I’ve explored mobile
            development on <span className="ios">iOS </span> with Swift, as well
            as on <span className="android">Android </span> with Java and
            Kotlin. Beyond working with web and mobile platforms, I’ve also
            played around making video games with Unity and IoT devices based on
            Arduino/ESP8266.
          </BodyText>
        </TextWrapper>
        <ImageWrapper>
          <img
            src="/images/code-section.svg"
            alt={"Programming Languages and Platforms"}
            width={"100%"}
          />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Heading = styled(H2)`
  span {
    background: ${themes.fancy.greenGradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`

const BodyText = styled(Body)`
  span.ios {
    color: ${themes.default.teal};
    font-weight: bold;
  }
  span.android {
    color: ${themes.default.green};
    font-weight: bold;
  }
`
