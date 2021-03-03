import React from "react"
import styled from "styled-components"
import MenuButton from "./buttons/MenuButton"

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuButton label="Resume" link="/files/JonWadden_Resume.pdf" />
      <MenuButton
        label="LinkedIn"
        link="https://www.linkedin.com/in/jonwadden"
      />
      <MenuButton label="GitHub" link="https://github.com/jwdn/waddenIO" />
      <MenuButton label="Say Hi" link="mailto:jon@wadden.io" />
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  gap: 16px;
  align-self: center;
  justify-self: flex-end;
  justify-content: space-between;
`
