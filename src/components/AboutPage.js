import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {DarkTheme} from './Themes';
import { keyframes } from 'styled-components';


import LogoComponent from './LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/particleComponent';

import astronaut from '../assets/images/spaceman.png';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0%   { transform: translateY(-12px) }
50%  { transform: translateY(16px) translateX(20px) }
100% { transform: translateY(-9px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 30%;
  right: 5%;
  width: 25vw;
  animation: ${float} 4s ease infinite;

  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-size: italic;

`


function AboutPage() {
  return (
  <ThemeProvider theme={DarkTheme}>
    <Box>
      <LogoComponent theme="dark"/>
      <SocialIcons theme="dark"/>
      <PowerButton />
      <ParticleComponent theme="dark"/>

      <Spaceman>
        <img src={astronaut} alt="spaceman"/>
      </Spaceman>
      <Spaceman>
        <img src={astronaut} alt="spaceman"/>
      </Spaceman>
      <Main>
        I am a developer and designer living in Norway. I love beeing creative, striving to create websites that become beautifull, fast and functional.
        <br/><br/>
        I live to learn everyday, constantly on the lookout for new emerging technologies to take my development and design process to the next level.
        <br/><br/>
        Everything is Art if you put your consiousness into it and create from a place of fun. 
        <br/><br/>
        Lets talk about your next project. You can connect to me on my social links.

      </Main>
      <BigTitle text="ABOUT" top="5rem" right="5rem"/>      
    </Box>
  </ThemeProvider>

    
  )
}

export default AboutPage