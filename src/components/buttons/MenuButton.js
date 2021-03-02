import React from "react"
import styled from "styled-components"
import { ButtonLabel } from "../styles/TextStyles"

export default function MenuButton(props) {
  const { label, link } = props
  return (
    <Wrapper>
      <a href={link}>
        <ButtonLabel>{label || "ERR"}</ButtonLabel>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 65px;
  padding: 0;
  margin: 0;
`
