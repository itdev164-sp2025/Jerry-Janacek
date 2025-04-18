import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { H1 } from "../Heading"
import { Section } from "../Section"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.header.backgroundColor}
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${props => props.theme.header.color}
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">
      <H1>
        {siteTitle}
      </H1>
    </StyledLink>
    <Section width={1/12}>
      Search
    </Section>
  </StyledHeader>
)

export { Header }
