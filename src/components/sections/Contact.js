import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { ContentWrapper, Wrapper, TextWrapper } from "../styles/GlobalStyle"
import ContactMenu from "../ContactMenu"
import { H2, Body } from "../styles/TextStyles"

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactContentWrapper>
        <ContactTextWrapper>
          <Heading>Let's build something amazing together.</Heading>
          <ContactBody>
            If you like the site and want to learn more about my work, please
            don’t hesitate to reach out! <br />I can’t wait to hear from you.
          </ContactBody>
        </ContactTextWrapper>
        <MenuWrapper>
          <ContactMenu />
        </MenuWrapper>
      </ContactContentWrapper>
    </ContactWrapper>
  )
}

const ContactWrapper = styled(Wrapper)`
  background-color: ${themes.default.green};
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`

const ContactTextWrapper = styled(TextWrapper)`
  justify-content: center;
  gap: 18px;
`

const ContactContentWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
`

const Heading = styled(H2)`
  text-align: center;
  background: ${themes.fancy.darkBlueGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const ContactBody = styled(Body)`
  text-align: center;
  color: ${themes.default.darkblue};
`
const MenuWrapper = styled.div`
  justify-content: center;
  justify-self: center !important;
`
