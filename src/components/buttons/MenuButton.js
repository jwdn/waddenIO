import React from "react"
import styled from "styled-components"
import { ButtonLabel } from "../styles/TextStyles"

export default function MenuButton(props) {
  const { label, link } = props
  return (
    <Wrapper>
      <a href={link}>
        <ButtonLabel>{label}</ButtonLabel>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80px;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 20px;
  justify-content: center;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`
