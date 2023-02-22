import { useState } from 'react'
import styled from 'styled-components'
import MainContainer from './StyledComponents/MainContainer'
import PowerButton from './SubComponents/PowerButton'
import SocialIcons from './SubComponents/SocialIcons'
import LogoComponent from './SubComponents/LogoComponent'
import { NavLink } from 'react-router-dom'
import { React } from './AllSvgs'
import CenterReactLogo from './StyledComponents/CenterReactLogo'
import Intro from './Intro'
import { motion } from 'framer-motion'
import Contact from './StyledComponents/Contact'
import { mediaQueries } from './Themes'

const Container = styled.div`
  padding: 2rem
`
const Projects = styled(NavLink)`
  color:${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  text-transform: uppercase;
  font-size: 1rem;
  top: 40%;
  right: calc(.5rem + 2vh);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

`
const Skills = styled(NavLink)`
  color:${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  text-transform: uppercase;
  font-size: 1rem;
  top: 33%;
  left: calc(.5rem + 2vh);
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`
const RESUME = styled(NavLink)`
  color:${props => props.theme.text};
  position: absolute;
  text-transform: uppercase;
  font-size: 1rem;
  top: 70%;
  right: calc(1rem + 2vh);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100;
  display: flex;
  justify-content: space-evenly;
`
const About = styled(NavLink)`
  color:${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  z-index: 10;
`
const Offer = styled(NavLink)`
  color:${props => props.theme.text};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  z-index: 1;
`
const LightDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #C0EEF2; 
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease;

${(props) =>
  props.click
  ? mediaQueries(50)`
      height: 50%;
      right:0;
      width: 100%;
      transition: width 0.5s ease, height 1s ease 0.5s;
`
  : mediaQueries(50)`
      height: 0;
      width: 0;
`};
`



const Main = () => {

  const [click, setClick] = useState(false);

  const [path, setpath] = useState("");

  const handleClick = () => {
    setClick(!click)
  }

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "skills" ? "100%" : "-100%"}`,
  };

  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <>
      <MainContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={path === "about" || path === "offers" ? moveY : moveX}
          transition={{ duration: 0.5 }}
      >
        <LightDiv click={click}/>
          <Container>
              <PowerButton />
              <LogoComponent theme={click ? 'light' : 'dark'}/>
              {mq ? (<SocialIcons theme="dark" />)
               : (<SocialIcons theme={click ? "light" : "dark"} />)}
              <CenterReactLogo click={click}>
              {mq ? (
                <React
                  onClick={() => handleClick()}
                  width={click ? 80 : 150}
                  height={click ? 80 : 150}
                  fill="currentColor"
                />
              ) : (
                <React
                  onClick={() => handleClick()}
                  width={click ? 120 : 200}
                  height={click ? 120 : 200}
                  fill="currentColor"
                />
              )}
                <span style={{color: '#C0EEF2', textTransform: 'uppercase', fontSize: '.8rem'}}>Click React</span>
              </CenterReactLogo>
              <Contact click={mq ? +click : +false} onClick={() => setpath("contact")}  to='/contact'>
                <motion.h2
                    initial={{
                      y: -200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    animate={{
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Lets Talk
                </motion.h2>
              </Contact> 
              <Projects click={mq ? +click : +false} onClick={() => setpath("projects")} to='/projects'>
                <motion.h2
                    initial={{
                      y: -200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    animate={{
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Projects
                </motion.h2>
              </Projects>
              <Skills click={click} onClick={() => setpath("skills")} to='/skills' >
                <motion.h2
                  onClick={() => setpath("work")}
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Skills
                </motion.h2>
              </Skills>
              <RESUME to='/resume' onClick={() => setpath("resume")}>
              <motion.h2
                    onClick={() => setpath("resume")}
                    initial={{
                      y: -200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    animate={{
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Resume
                  </motion.h2>
              </RESUME>
              <BottomBar>
                <About click={mq ? +false : +click} onClick={() => setpath("about")}  to='/about'>
                  <motion.h2
                    onClick={() => setpath("about")}
                    initial={{
                      y: 200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    animate={{
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    About
                  </motion.h2>
                </About>
                <Offer to='/offers' onClick={() => setpath("offers")}>
                  <motion.h2
                    initial={{
                      y: 200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    animate={{
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    I also offer...
                  </motion.h2>
                </Offer>
              </BottomBar>

              {click ? <Intro click={click}/> : null}
          </Container>
      </MainContainer>
    </>
  )
}

export default Main
