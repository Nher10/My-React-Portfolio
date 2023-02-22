import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, mediaQueries } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from './SubComponents/LogoComponent'
import SocialIcons from './SubComponents/SocialIcons'
import PowerButton from './SubComponents/PowerButton'
import ParticleComponent from './SubComponents/ParticleComponent'
import BigTitle from './SubComponents/BigTitle'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

${mediaQueries(50)`
  flex-direction:column;  
  padding:8rem 0;
  height:auto;
&>*:nth-child(5){
  margin-bottom:5rem;
}
`};

${mediaQueries(30)`
&>*:nth-child(5){
  margin-bottom:4rem;
}
`};
`
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
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

${mediaQueries(60)`
  height: 55vh;
`};

${mediaQueries(50)`
  width: 50vw;
  height: max-content;
`};
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}

${mediaQueries(60)`
  font-size:calc(0.8em + 1vw);
`};

${mediaQueries(50)`
  font-size:calc(1em + 2vw);
  margin-bottom:1rem;
`};

${mediaQueries(30)`
  font-size:calc(1em + 1vw);
`};

${mediaQueries(25)`
  font-size:calc(0.8em + 1vw);

  svg{
    width:30px;
    height:30px;
  }
`};
`
const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(.6rem + 1vw);
  padding: .5rem 0;

${Main}:hover &{
  color: ${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}

ul,p{
  margin-left: 2rem;
}

${mediaQueries(50)`
  font-size: calc(0.8em + 1vw);
`};

${mediaQueries(30)`
  font-size:calc(0.7em + 1vw);
`};

${mediaQueries(25)`
  font-size:calc(0.5em + 1vw);
`};
`

const MySkillsPage = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme='light'/>
          <SocialIcons theme='light'/>
          <PowerButton />
          <ParticleComponent />
            <Main>
              <Title>
                <Design width={40} height={40}/> Designer
              </Title>
              <Description>
                I love to create design which speaks, Keep it clean, minimal and simple.
              </Description>
              <Description>
                <strong>I like to design</strong>
                <ul>
                  <li>
                    Web design
                  </li>
                  <li>
                    Flat Design
                  </li>
                </ul>
              </Description>
              <Description>
                <strong>Tools</strong>
                <ul>
                  <li>
                    Figma
                  </li>
                  <li>
                    Gravit Designer
                  </li>
                </ul>
              </Description>
            </Main>
            <Main>
              <Title>
                <Develope width={40} height={40}/> Frontend Developer
              </Title>
              <Description>
                I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
              </Description>
              <Description>
                <strong>Skills</strong>
                <p>
                Html, Css, Js, React, Sass, Bootstrap etc.
                </p>
              </Description>
              <Description>
                <strong>Tools</strong>
                <p>VScode, Github, Codepen, Ripple etch.</p>
              </Description>
            </Main>
            <BigTitle text='SKILLS' top='80%' right='30%%'/>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default MySkillsPage
