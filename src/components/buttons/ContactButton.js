import React from "react"
import styled from "styled-components"
import { Body } from "../styles/TextStyles"

export default function ContactButton(props) {
  const { image, text, link } = props
  return (
    <Wrapper>
      <a href={link}>
        <ButtonWrapper>
          <ContactIconWrapper>
            <img
              src={image}
              alt={text}
              width="26px"
              style={{ color: "#280184" }}
            />
          </ContactIconWrapper>
          <ContactText>{text}</ContactText>
        </ButtonWrapper>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 6px;
  width: 180px;
  height: 80px;
  padding: 10px;
  border-radius: 18px;

  transition: 0.5s ease-out;

  :hover {
    background: rgba(87, 194, 183, 0.5);
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 0.5px rgba(87, 194, 183, 0.5);
    transform: scale(1.05);
  }
`

const ContactIconWrapper = styled.div`
  width: 26px;
  justify-self: center;
  padding-top: 6px;
`
const ContactText = styled(Body)`
  text-align: center;
`
