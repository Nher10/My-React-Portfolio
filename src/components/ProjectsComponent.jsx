import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from './Themes'

const Box = styled.div`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 23rem;
  padding: 1rem;
  color: ${props => props.theme.body};
  border: 2px solid ${props => props.theme.body}; 
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

&:hover {
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  transition: all 0.3s ease;  
}

${mediaQueries(50)`
  width:calc(60vw);
`};
${mediaQueries(30)`
  height:18rem;
`};

${mediaQueries(25)`
  height:14rem;
  padding:0.8rem;
  backdrop-filter: none;
`};
`

const Image = styled.img`
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center;

${mediaQueries(25)`
  height:70%;
`};

${Box}:hover &{
  border: 1px solid ${props => props.theme.text}
}
`
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla',sans-serif ;
  font-weight: 700;
  border-bottom: 1px solid #181823;

${mediaQueries(40)`
  font-size:calc(0.8em + 1vw);
`};

${mediaQueries(25)`
  font-size:calc(0.6em + 1vw);
`};

${Box}:hover &{
  border-bottom: 1px solid #C0EEF2;
}
`


const HashTags = styled.div`
  padding: 0.5rem 0;

${mediaQueries(25)`
  font-size:calc(0.5em + 1vw);
`};
`
const Tag = styled.span`
  padding-right: 0.5rem;
`

const Date = styled.span`
  padding: 0.5rem 0;

${mediaQueries(25)`
  font-size:calc(0.5em + 1vw);
`};
`

const ProjectsComponent = (props) => {

  return (
    <Box target='_blank' to={{pathname: props.link}}>
        <Image src={props.image} className='project-image' alt=""></Image>
        <Title className='project-title'>{props.name}</Title>
        <HashTags>
          {
            props.tags.map((tag, id) => {
              return <Tag key={id}>#{tag}</Tag>
            })
          }
        </HashTags>
        <Date>
          {props.date}
        </Date>
    </Box>
  )
}

export default ProjectsComponent
