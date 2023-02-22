import { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, mediaQueries} from './Themes'
import LogoComponent from './SubComponents/LogoComponent'
import SocialIcons from './SubComponents/SocialIcons'
import PowerButton from './SubComponents/PowerButton'
import { Offers } from '../data/OffersData'
import Card from './SubComponents/Card'
import { React } from './AllSvgs'
import BigTitle from './SubComponents/BigTitle'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  alifn-items: center;
`
const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

${mediaQueries(50)`
  left:calc(8rem + 15vw);
`};

${mediaQueries(40)`
  top: 30%;
  left:calc(6rem + 15vw);
`};

${mediaQueries(40)`
  left:calc(2rem + 15vw);
`};

${mediaQueries(25)`
  left:calc(1rem + 15vw);
`};
`
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

${mediaQueries(40)`
  width:60px;
  height:60px;  

  svg{
    width:60px;
    height:60px;
  }

`};
${mediaQueries(25)`
  width:50px;
  height:50px;

  svg{
    width:50px;
    height:50px;
  }
`};
`

const OffersPage = () => {

  const ref = useRef(null);
  const react = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
      react.current.style.transform = `rotate(`+ -window.pageYOffset + 'deg)'
    }
    
    window.addEventListener('scroll', rotate)

    return () => window.removeEventListener('scroll', rotate)
  }, [])
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme='dark'/>
          <SocialIcons theme='dark'/>
          <PowerButton />
          <Main ref={ref}>
            {
              Offers.map(offer => 
              <Card key={offer.id} 
              data={offer}
              name={offer.name}
              description={offer.description}
              tags={offer.tags}
              github={offer.github}
              /> 
              )
            }
          </Main>
          <Rotate ref={react}>
            <React width={80} height={80} fill={darkTheme.text}/>
          </Rotate>
          <BigTitle text='OFFERS' top='10%' right='25%'/>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default OffersPage
