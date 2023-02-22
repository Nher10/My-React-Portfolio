import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Github } from '../AllSvgs'


const Box = styled.li`
  width: 25rem;
  height: 50vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem; 
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.2s ease;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}
`
const Title = styled.div`
  font-size: calc(1em + .5vw);
`
const Description = styled.h2`
  font-size: calc(1em + .3vw);
  font-family: 'Karla', sans-serif;
  font-weigh: 500;
`
const Tags =styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: .5rem;
  display: flex;
  flex-wrap: wrap;
${Box}:hover &{
    border-top: 2px solid ${props => props.theme.text};
}
`
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(.8rem + .3vw);
`

const Footer =styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Link = styled(NavLink)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: .5rem calc(2rem + 2vh);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + .5vh);

${Box}:hover &{
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
}

`
const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;

${Box}:hover &{
    &>*{
        fill: ${props => props.theme.text}; 
    }
}

`

const Card = (props) => {

  

  return (
    <Box key={props.id}>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <Tags>
        {
            props.tags.map((tag, id) => {
                return <Tag key={id}>#{tag}</Tag>
            })
        }
      </Tags>
      <Footer>
        <Link to='https://github.com'>Visit</Link>
        <Git to={props.github}>
            <Github width={30} height={30}/>
        </Git>
      </Footer>
    </Box>
  )
}

export default Card
