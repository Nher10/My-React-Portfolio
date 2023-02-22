import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme, mediaQueries } from './Themes'
import LogoComponent from './SubComponents/LogoComponent'
import SocialIcons from './SubComponents/SocialIcons'
import PowerButton from './SubComponents/PowerButton'
import ParticleComponentDark from './SubComponents/ParticleComponentDark'
import Nherwin from '../assets/images/spacemanMe.png'
import BigTitle from './SubComponents/BigTitle'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
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
  font-size: calc(.6rem + 1vw);
  backdrop-filter: blur(10px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

${mediaQueries(40)`
  width: 60vw;
  height: 50vh;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`};
${mediaQueries(30)`
  width: 50vw;
  height: auto;
  backdrop-filter: none;
  margin-top:2rem;
`};

${mediaQueries(20)`
  padding: 1rem;
  font-size: calc(0.5rem + 1vw);
`};
`

const AboutPage = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        
          <LogoComponent theme='dark'/>
          <SocialIcons theme='dark'/>
          <PowerButton />
          <ParticleComponentDark />

          <Spaceman>
            <img src={Nherwin} alt="spaceman" />
          </Spaceman>

          <Main>
          I'm a front-end developer located in Tarlac. I love to create simple yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and Entrepreneur. I love to solve a pattern or problems and read books.
          <br /> <br />
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
          </Main>
            
          <BigTitle text='ABOUT' top='80%' right='5%'/>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default AboutPage
