import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 55vw;
display: flex;
background: linear-gradient(
    to right, 
    ${(props) => props.theme.body} 50%,
    ${(props) => props.theme.text} 50%) bottom,
    linear-gradient(
        to right, 
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${(props) => props.theme.body};
border-right: 2px solid ${(props) => props.theme.text};
z-index: 1;

@media (max-width: 850px) and (orientation: landscape) {
    flex-direction: column;
    width: 65vw;
    background: none;
    border-left: none;
    border-right: none;
}


@media (max-width: 650px) {
    flex-direction: column;
    width: 65vw;
    background: none;
    border-left: none;
    border-right: none;
}
`

const SubBox = styled.div`
position: relative;
width: 100%;
`

const TextOne = styled.div`
font-size: calc(1em + 1.5vh);
color: ${(props) => props.theme.body};
display: flex;
justify-content: space-evenly;
flex-direction: column;
padding: 2rem;
cursor: pointer;

&>*:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
}

@media (max-width: 850px) and (orientation: landscape) {
    font-size: calc(0.8em + 1.2vh);
}

@media (max-width: 650px) {
    font-size: calc(0.8em + 1vh);
}

@media (max-width: 480px) {
    font-size: calc(0.6em + 1vh);
}
`

const TextTwo = styled(motion.div)`
font-size: calc(1em + 1.5vh);
font-weight: 400;
color: ${(props) => props.theme.text};
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
padding: 2rem;
cursor: pointer;

&>*:last-child {
    color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
}

@media (max-width: 850px) and (orientation: landscape) {
    align-items: flex-start;
}

@media (max-width: 650px) {
    align-items: flex-start;
    margin-top: 3rem;
}

@media (max-width: 390px) {
    margin-top: 1rem;
}
`

const Intro = () => {

  return (
    <Box
        initial={{height:0}}
        animate={{height: '37vh'}}
        transition={{ type: 'spring', duration: 2, delay:1}}
    >
        <SubBox>
            <TextOne>
                <h1>Fabio Rostran</h1>
                <h3>Web Developer</h3>
            </TextOne>
        </SubBox>
        <SubBox>
            <TextTwo 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2, delay:1}}
            >
                <h3>Web Development</h3>
                <h4>Welcome to my page</h4>
            </TextTwo>
        </SubBox>
    </Box>
  )
}

export default Intro
