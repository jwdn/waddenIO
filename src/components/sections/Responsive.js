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

export default function Responsive() {
  return (
    <Wrapper>
      <ContentWrapper>
        <FlippedImageWrapper>
          <img
            src="/images/modern-section.svg"
            alt={"Responsive design to reach every screen"}
            width={"100%"}
          />
        </FlippedImageWrapper>
        <TextWrapper>
          <Heading>Responsive to reach every screen.</Heading>
          <BodyText>
            Today’s devices come in all shapes and sizes. I build apps using
            modern, responsive frameworks to reach as many platforms as
            possible. <br />
            <br />I built this site using <span className="react">
              React
            </span>{" "}
            and <span className="gatsby">Gatsby.</span> I also have some
            experience building simple, easy-to-maintain sites with WordPress.
          </BodyText>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Heading = styled(H2)`
  background: ${themes.fancy.lightBlueGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const BodyText = styled(Body)`
  span.react {
    color: ${themes.default.teal};
    font-weight: bold;
  }
  span.gatsby {
    color: ${themes.default.pink};
    font-weight: bold;
  }
`

const FlippedImageWrapper = styled(ImageWrapper)`
  transform: scale(1);
  grid-row: 1;
  @media screen and (min-width: 768px) {
    transform: scale(0.6);
    grid-row: 1;
    transform-origin: bottom left;
  }
  @media screen and (min-width: 1032px) {
    transform: scale(0.8);
    transform-origin: left;
  }
`
