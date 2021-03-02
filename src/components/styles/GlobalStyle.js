import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.default.darkpurple};
    color: white;
    overflow-x: hidden !important;  
    overflow-y: hidden;
    max-width: 100%;
    }
`
export const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const ContentWrapper = styled.div`
  // Mobile 320-767px
  max-width: 320px;
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  // vertical spacing between elements is always 32px
  gap: 32px;

  // Tablet 768-1023px
  @media screen and (min-width: 768px) {
    // Same content layout as Mobile
    max-width: 660px;
  }
  // Desktop 1024px+
  @media screen and (min-width: 1024px) {
    max-width: 1000px;
    grid-template-columns: 6fr 5fr;
    gap: 105px;
  }
`

export const TextWrapper = styled.div`
  // Same for all screen sizes
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`

export const ImageWrapper = styled.div``