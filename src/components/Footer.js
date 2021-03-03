import React from "react"
import styled from "styled-components"
import { Wrapper } from "./styles/GlobalStyle"
import { ButtonLabel } from "./styles/TextStyles"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <FooterLabel>Copyright © 2021 Jon Wadden</FooterLabel>
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Wrapper)`
  width: 100%;
  height: 52px;
  background: rgba(0, 0, 51, 0.4);
  box-shadow: 0px 0px -4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  display: grid;
  justify-content: center;
`
const FooterContentWrapper = styled.div`
  // Mobile 320-767px
  width: 320px;
  display: grid;
  grid-template-rows: 1fr;
  align-items: flex-start;
  justify-content: flex-start;

  // Tablet 768-1023px
  @media screen and (min-width: 768px) {
    width: 660px;
  }
  // Desktop 1024px+
  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
`

const FooterLabel = styled(ButtonLabel)`
  opacity: 75%;
  text-align: left;
  justify-self: flex-start;
`
