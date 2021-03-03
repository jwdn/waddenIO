import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.fancy.backgroundGradient};
    
    color: white;
    overflow-x: hidden !important;  
    max-width: 100%;
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    }
`
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const ContentWrapper = styled.div`
  // Mobile 320-767px
  width: 280px;
  //max-width: 320px;
  display: grid;
  //grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  // vertical spacing between elements is always 32px
  gap: 32px;
  padding: 60px 0%;

  @media screen and (min-width: 360px) {
    width: 320px;
  }
  // Tablet 768-1032px
  @media screen and (min-width: 768px) {
    // Same content layout as Mobile
    width: 660px;
  }
  // Desktop 1032px+
  @media screen and (min-width: 1032px) {
    width: 1000px;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding: 80px 0%;
  }
`

export const TextWrapper = styled.div`
  // Same for all screen sizes
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  width: 100%;
`

export const ImageWrapper = styled.div`
  transform: scale(1);
  transform-origin: left;
  @media screen and (max-width: 1031px) {
    grid-row: 1;
  }
  @media screen and (min-width: 768px) {
    transform: scale(0.6);
    transform-origin: bottom left;
  }
  @media screen and (min-width: 1032px) {
    transform: scale(0.8);
    transform-origin: right;
  }
`
