import React from "react"
import styled from "styled-components"
import MenuButton from "./buttons/MenuButton"

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuButton label="Resume" link="files/JonWadden_Resume.pdf" />
      <MenuButton
        label="LinkedIn"
        link="https://www.linkedin.com/in/jonwadden"
      />
      <MenuButton label="GitHub" link="https://github.com/jwdn/waddenIO" />
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  align-self: center;
  justify-self: flex-end;
  justify-content: space-between;
  padding-top: 10px;
  gap: 12px;

  @media screen and (max-width: 767px) {
    justify-self: center;
    justify-content: space-evenly;
    width: 320px;
    padding-bottom: 4px;
    padding-top: 0px;
  }
`
