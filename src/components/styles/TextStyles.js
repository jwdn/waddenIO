import styled from "styled-components"

// Page Title
export const H1 = styled.h1`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  // Mobile
  font-size: 54px;

  // Tablet & Desktop
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`

// Section Headings
export const H2 = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  line-height: 115%;
  // Mobile
  font-size: 40px;

  // Tablet & Desktop
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

// Callout / Subtitles
export const Callout = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  opacity: 75%;
  letter-spacing: 0.02em;
  // Mobile
  font-size: 24px;

  // Tablet & Desktop
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

// Body Text
export const Body = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.04em;
  // Mobile
  font-size: 16px;

  // Tablet
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  // Desktop
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`

// Button Labels
export const ButtonLabel = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.04em;
  // All platforms share same sizing.
  font-size: 14px;
  color: white;
  text-align: center;
`
// Button Labels
export const HeaderLabel = styled.h3`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  // All platforms share same sizing.
  font-size: 24px;
  color: white;
`
