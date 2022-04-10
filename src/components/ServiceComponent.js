import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled.div`
width: calc(10rem + 15vw);
height: 30rem;
text-decoration: none;
padding: 1rem;
color: ${(props) => props.theme.body};
border: 2px solid ${(props) => props.theme.body};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
cursor: pointer;
display: flex;
flex-direction: column;
z-index: 5;
&:hover {
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  background: ${(props) => props.theme.body};
  transition: all 0.3s ease;
}

@media (max-width: 650px) {
  width: calc(20rem + 15vw);
}

@media (max-width: 480px) {
  width: calc(20rem + 15vw);
  height: 35rem;
}

@media (max-width: 390px) {
  width: calc(15rem + 15vw);
  height: 40rem;
}

`
const Image = styled.div`
background-image: ${(props) => `url(${props.img})`};
background-size: cover;
background-position: center center;
width: 60%;
height: 50%;
border: 1px solid transparent;
margin-left: 20%;

@media (max-width: 390px) {
  width: 50%;
  height: 30%;
}

`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom:1px solid ${(props) => props.theme.body};
`
const Container = styled(motion.div)``
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

const Description = styled.p`
margin-top: 1rem;
`

const ServiceComponent = (props) => {

  const {name,description, imgSrc, link} = props.blog
  return (
    <Container variants={Item}>
      <Box target='_blank' to={{pathname: link}}>
        
        <Image img={imgSrc}/>
        <Title>{name}</Title>
        <Description>
          {description}
        </Description>
      </Box>
    </Container>
  )
}

export default ServiceComponent;
