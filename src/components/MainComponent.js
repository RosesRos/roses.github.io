import React, {useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import { motion } from "framer-motion";
import Earth from '../assets/Images/earth.png';
import Moon from '../assets/Images/moon.jpg';



const MainContainer = styled.div`
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.text};
height: 100vh;
overflow: hidden;
position: relative;
h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}

@media (min-height: 200px) and (max-height: 480px) {
    height: 200vh;
}
`

const SecondContainer = styled.div`
padding: 0.5rem;
`

const Contact = styled(NavLink)`
color: ${(props) => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;

@media (max-width: 850px) and (orientation: landscape) {
    color: ${(props) => props.click ? "#000000" : props.theme.text}
}

@media (max-width: 650px) {
    color: ${(props) => props.click ? "#000000" : props.theme.text}
}

@media (max-width: 480px) {
    font-size: calc(0.8rem + 1vw);
}
`

const SERVICE = styled(NavLink)`
color: ${(props) => props.theme.text};
position: absolute;
top: 50%;
transform: rotate(90deg) translate(-50%, -50%);
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;

@media (max-width: 850px) and (orientation: landscape) {
    top: 48%;
    color: ${(props) => props.click ? "#000000" : props.theme.text};
}

@media (max-width: 650px) {
    top: 48%;
    color: ${(props) => props.click ? "#000000" : props.theme.text};
}

@media (max-width: 480px) {
    font-size: calc(0.8rem + 1vw);
}

@media (min-height: 200px) and (max-height: 500px) {
    top: 44%
}
`
const WORK = styled(NavLink)`
color: ${(props) => props.click ? "#000000" : props.theme.text};
position: absolute;
top: 50%;
left:calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;

@media (max-width: 850px) and (orientation: landscape) {
    top: 44%;
}

@media (max-width: 650px) {
    top: 44%;
}

@media (max-width: 480px) {
    font-size: calc(0.8rem + 1vw);
}

@media (min-height: 200px) and (max-height: 500px) {
    top: 40%
}
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${(props) => props.click ? "#000000" : props.theme.text};
text-decoration: none;
z-index: 1;

@media (max-width: 850px) and (orientation: landscape) {
    color: ${(props) => props.theme.text};
}

@media (max-width: 650px) {
    color: ${(props) => props.theme.text};
}

@media (max-width: 480px) {
    font-size: calc(0.8rem + 1vw);
}
`

const SKILL = styled(NavLink)`
color: ${(props) => props.theme.text};
text-decoration: none;
z-index: 1;

@media (max-width: 480px) {
    font-size: calc(0.8rem + 1vw);
}
`

const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg)
}
`

const Center = styled.div`
position: absolute;
left: ${(props) => props.click ? "92%" : "50%"};
top: ${(props) => props.click ? "85%" : "50%"};
transform: translate(-50%, -50%);
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transition: all 1s ease;

&>:first-child {
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child {
    display: ${(props) => props.click ? "none" : "inline-block"};
    padding-top: 1rem;
}

@media (max-width: 850px) and (orientation: landscape) {
    left: ${(props) => props.click ? "90%" : "50%"};
}

@media (max-width: 650px) {
    left: ${(props) => props.click ? "85%" : "50%"};
}
`

const LightDiv = styled.div`
background-image: linear-gradient(rgba(221, 221, 244, 0.5), rgba(226, 226, 226, 0.5)),
                  url(${Moon});
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
right: 50%;
width: ${(props) => props.click ? "50%" : " 0%"};
height: ${(props) => props.click ? "100%" : " 0%"};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;

@media (max-width: 850px) and (orientation: landscape) {
    right: 0;
    width: ${(props) => props.click ? "100%" : " 0%"};
    height: ${(props) => props.click ? "50%" : " 0%"};
}

@media (max-width: 650px) {
    right: 0;
    width: ${(props) => props.click ? "100%" : " 0%"};
    height: ${(props) => props.click ? "50%" : " 0%"};
}
`


const MainComponent = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick((prev) => prev = !click)
    }

    let x = window.matchMedia("(max-width: 480px)")

    const mobilWidth = () => {
        if (x.matches) {
            return click ? 80 : 100
        } else {
            return click ? 120 : 150
        }
    }

    const mobilHeight = () => {
        if (x.matches) {
            return click ? 80 : 100
        } else {
            return click ? 120 : 150
        }
    }

    return (
        <MainContainer>
            <LightDiv click={click}></LightDiv>
            <SecondContainer>
                <PowerButton />
                <LogoComponent theme={click ? "#FCF6F4" : "dark"}/>
                <SocialIcons theme={click ? "#FCF6F4" : "dark" }/>

                <Center click={click}>
                    <img src={Earth} alt="earth" onClick={() => handleClick()} width={mobilWidth()} height={mobilHeight()}/>
                    
                    <motion.span
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >click</motion.span>
                </Center>

                <Contact target="_blank" to={{pathname:"mailto:rostranespinoza@gmail.com"}} click={+click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: {
                                type: 'spring',
                                duration: 1.5,
                                delay: 1
                            }
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                type: 'spring',
                                duration: 1.5,
                                delay: 1
                            }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >Say hi...</motion.h2>
                </Contact>

                <SERVICE to="/service" click={+click}>
                    <motion.h3
                        initial={{
                            y: -200,
                            transition: {
                                type: 'spring',
                                duration: 1.5,
                                delay: 1
                            }
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                type: 'spring',
                                duration: 1.5,
                                delay: 1
                            }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >SERVICES</motion.h3>
                </SERVICE>

                <WORK to="/work" click={+click}>
                    <motion.h3
                        initial={{
                            y: -200,
                            transition: {
                                type: 'spring',
                                duration: 1.5,
                                delay: 1
                            }
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                type: 'spring',
                                duration: 1.5,
                                delay: 1
                            }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >WORKS</motion.h3>
                </WORK>

                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h3
                            initial={{
                                y: 200,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: 1
                                }
                            }}
                            animate={{
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: 1
                                }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >ABOUT</motion.h3>
                    </ABOUT>
                    <SKILL to="/skill">
                        <motion.h3
                            initial={{
                                y: 200,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: 1
                                }
                            }}
                            animate={{
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: 1
                                }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >SKILLS</motion.h3>
                    </SKILL>
                </BottomBar>

            </SecondContainer>
            {click ? <Intro click={click}/> : null}
        </MainContainer>
    )
}

export default MainComponent;