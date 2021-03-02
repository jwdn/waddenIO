import React from "react"
import styled from "styled-components"
import { Wrapper } from "./styles/GlobalStyle"
import { HeaderLabel } from "./styles/TextStyles"
import Menu from "./Menu"

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HeaderLabelWrapper>
          <a href="/">
            <HeaderLabel>Jon Wadden</HeaderLabel>
          </a>
        </HeaderLabelWrapper>
        <Menu />
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled(Wrapper)`
  width: 100%;
  height: 44px;
  background: rgba(0, 0, 51, 0.4);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  display: grid;
  justify-content: center;
`
const HeaderContentWrapper = styled.div`
  // Mobile 320-767px
  width: 100%;
  max-width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  // Tablet 768-1023px
  @media screen and (min-width: 768px) {
    max-width: 660px;
  }
  // Desktop 1024px+
  @media screen and (min-width: 1024px) {
    // TODO test and fix
    max-width: 1000px;
  }
`
const HeaderLabelWrapper = styled.div`
  width: 200px;
  height: 100%;
  display: grid;
  align-self: center;
  justify-self: flex-start;
`
