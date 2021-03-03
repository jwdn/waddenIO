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

  background: rgba(0, 0, 51, 0.4);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(16px);
  display: grid;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 52px;
    position: fixed;
  }

  z-index: 1000;
`
const HeaderContentWrapper = styled.div`
  // Mobile 320-767px
  width: 320px;
  //max-width: 320px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;

  // Tablet 768-1023px
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 660px;
  }
  // Desktop 1024px+
  @media screen and (min-width: 1024px) {
    // TODO test and fix
    width: 1000px;
  }
`
const HeaderLabelWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-self: center;
  justify-self: center;
  padding-top: 12px;
  padding-bottom: 4px;
  @media screen and (min-width: 768px) {
    justify-self: flex-start;
  }
`
