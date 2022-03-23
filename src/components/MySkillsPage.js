import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {LightTheme} from './Themes';
import {Design, Develope} from './AllSvgs';
import LogoComponent from './LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/particleComponent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}

`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover &{
    &>*{
      fill:${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{

      color:${props => props.theme.body};

  }

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p{
    margin-left: 2rem;
  }

`

function MySkillsPage() {
  return (
  <ThemeProvider theme={LightTheme}>
    <Box>
      <LogoComponent theme="light"/>
      <SocialIcons theme="light"/>
      <PowerButton />
      <ParticleComponent theme="light"/>
      <Main>
        <Title>
          <Design width={40} height={40} /> Designer
        </Title>
        <Description>
          There is beauty in simplicity, designing it clean, minimal and simple is what i love to do.
        </Description>
        <Description>
          <strong>I Design</strong>
          <ul>
            <li>
              Websites
            </li>
            <li>
              Mobile Apps
            </li>
          </ul>
        </Description>
        <Description>
          <strong>Tools</strong>
          <ul>
            <li>
              Figma
            </li>
          </ul>
        </Description>
      </Main>

      <Main>
        <Title>
          <Develope width={40} height={40} /> Fullstack Developer
        </Title>
        <Description>
        Creatively I love bringing new ideas to life.
        </Description>
        <Description>
          <strong>Skills</strong>
          <strong>
            <p> Frontend: </p>
          </strong>
          <ul>
            <li>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
            </p>
          </li>
          </ul>
          <strong>
            <p>Backend: </p>
          </strong>
          <ul>
            <li>
              <p>
                Ruby, Rails, SQL, PostgreSQL, Heroku, Docker
              </p>
            </li>
          </ul>
        </Description>
      </Main>
    </Box>
  </ThemeProvider>

    
  )
}

export default MySkillsPage