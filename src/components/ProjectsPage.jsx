import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from './SubComponents/LogoComponent'
import SocialIcons from './SubComponents/SocialIcons'
import PowerButton from './SubComponents/PowerButton'
import { Projects } from '../data/ProjectsData'
import ProjectsComponent from './ProjectsComponent'
import AnchorComponent from './SubComponents/AnchorComponent'
import BigTitle from './SubComponents/BigTitle'
import { motion } from 'framer-motion'
import { mediaQueries } from './Themes'

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

${mediaQueries(30)`
  padding-top: 7rem;
`};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

${mediaQueries(50)`
  grid-template-columns: 100%;
`};
`

const ProjectsPage = () => {

  const [numbers, setNumbers] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num))
  }, [])

  return (
    <MainContainer
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
        <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          <AnchorComponent numbers={numbers}/>
          <Center>
            <Grid>
              {
                Projects.map(project => {
                  return <ProjectsComponent key={project.id}
                  Projects={Projects}
                  image={project.imgSrc}
                  link={project.link}
                  name={project.name}
                  tags={project.tags}
                  date={project.date}
                  />
                })
              }
            </Grid>
          </Center>
          <BigTitle text='PROJECTS' top='5%' left='10%'/>
        </Container>
    </MainContainer>
  )
}

export default ProjectsPage