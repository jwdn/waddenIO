import React from "react"
import styled from "styled-components"
import MenuButton from "./buttons/MenuButton"

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuButton label="Resume" link="https://www.apple.com/ca/" />
      <MenuButton
        label="LinkedIn"
        link="https://www.linkedin.com/in/jonwadden"
      />
      <MenuButton label="GitHub" link="https://www.apple.com/ca/" />
      <MenuButton label="Say Hi" link="https://www.apple.com/ca/" />
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-self: center;
  justify-self: flex-end;
  justify-content: space-between;
`
