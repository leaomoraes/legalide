import { Link } from 'react-router-dom'
import styled from 'styled-components'

import bgmd from 'assets/headerbgmd.png'

export const HeaderSt = styled.div`
  color: #fff;

  @media (max-width: 768px) {
    background-color: #252b42;
  }

  @media (min-width: 768px) {
    background-image: url(${bgmd});
    background-repeat: no-repeat;
    background-size: cover;
  }

  & li {
    list-style: none;
    margin-bottom: 0.5rem;
  }

  & li a {
    text-decoration: none;
    color: inherit;
    font-size: large;
    /* white-space: nowrap; */
  }
`

export const MenuLogo = styled(Link)`
  text-decoration: none;
  color: inherit;

  & h2 {
    margin: 0;
  }

  :hover {
    color: inherit;
  }
`
