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

export default function Design() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Heading>Great design makes all the difference.</Heading>
          <BodyText>
            Design sets great apps apart from the rest. That’s why I’m
            passionate about creating beautiful, easy-to-use experiences. From
            wireframe, to prototype, to pixel-perfect design, every detail
            matters. <br />
            <br />
            My go-to design tools are <span className="figma">
              Figma
            </span> and <span className="sketch">Sketch.</span> I’m also
            familiar with Adobe Xd, Photoshop, and Illustrator.
          </BodyText>
        </TextWrapper>
        <ImageWrapper>
          <img
            src="/images/design-section.svg"
            alt={"Great design makes all the difference."}
            width={"100%"}
          />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Heading = styled(H2)`
  background: ${themes.fancy.pinkGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const BodyText = styled(Body)`
  span.figma {
    color: ${themes.default.green};
    font-weight: bold;
  }
  span.sketch {
    color: ${themes.default.yellow};
    font-weight: bold;
  }
`
