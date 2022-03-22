import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from './Themes'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2erm;
z-index: 3;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
        AH
    </Logo>

  )
}

export default LogoComponent