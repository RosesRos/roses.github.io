import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Github from '../dataReact/Github';
import { motion } from 'framer-motion';


const Box = styled(motion.li)`
width: 20rem;
height: 40vh;
background-color: ${(props) => props.theme.text};
color: ${(props) => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
justify-content: space-between;
flex-direction: column;
border: 1px solid ${(props) => props.theme.body};
transition: all 0.2s ease;
&:hover {
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  cursor: pointer;
}
`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.p`
font-size: calc(0.8em + 0.4vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
`

const Tags = styled.div`
border-top: 1px solid ${(props) => props.theme.body};
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
${Box}:hover &{
  border-top: 1px solid ${(props) => props.theme.text};
}
`


const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 00.4vw);
`


const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
`

const Link = styled(NavLink)`
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size: calc(1em + 0.5vw);
${Box}:hover & {
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
}
`
const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover & {
  &>* {
    fill: ${(props) => props.theme.text};
  }
}
`

const Item = {
  hidden: {
    scale:0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }

}

const Card = (props) => {

  const {id, name, description, tags, demo, github} = props.data

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
          {
            tags.map((t, id) => {
              return <Tag key={id}>{t}</Tag>
            })
          }
      </Tags>
      <Footer>
        <Link to={{pathname:`${demo}`}} target='_blank'>Visit</Link>
        <Git to={{pathname: `${github}`}} target='_blank'>
          <Github width={30} height={30}/>
        </Git>
      </Footer>
    </Box>
  )
}

export default Card
