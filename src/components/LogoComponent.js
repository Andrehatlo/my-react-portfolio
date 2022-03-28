import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import { DarkTheme } from './Themes'
import { motion } from 'framer-motion'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 3rem;
top: 3rem;
z-index: 3;
text-decoration: none;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
            AHJ        
      </NavLink>
    </Logo>

  )
}

export default LogoComponent