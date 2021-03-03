import React from "react"
import styled from "styled-components"
import ContactButton from "./buttons/ContactButton"

export default function ContactMenu() {
  return (
    <MenuWrapper>
      <ContactButton
        image="/images/icons/linkedin.svg"
        text="LinkedIn"
        link="https://www.linkedin.com/in/jonwadden"
      />
      <ContactButton
        image="/images/icons/envelope.svg"
        text="jon@wadden.io"
        link="mailto:jon@wadden.io"
      />
      <ContactButton
        image="/images/icons/phone.svg"
        text="(902) 222-0591"
        link="tel:9022220591"
      />
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  width: 100%;
  gap: 36px;
  display: grid;
  grid-template-columns: 160px 160px 160px;
  justify-content: space-between;
  justify-self: center;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 4px;
    justify-content: center;
  }
`
