import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Theme";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import spaceman from '../assets/Images/spaceman.png';
import BigTitle from "../subComponents/BigTitle";


const Box = styled.div`
background-color: ${(props) => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

@media (min-height: 200px) and (max-height: 450px) {
    height: 150vh;
}
`

const Contact = styled(NavLink)`
color: ${(props) => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const float = keyframes`
0% {
    transform: translateY(-10px)
}

50% {
    transform: translateY(15px) translateX(15px)
}

100% {
    transform: translateY(-10px)
}
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img {
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;

@media (min-height: 200px) and (max-height: 450px) {
    height: 80vh;
}

@media (max-width: 480px) {
    top: 15rem;
    height: 50vh;
}
`

const ContactGit = styled(NavLink)`
color: ${(props) => props.theme.text};
text-decoration: none;
z-index: 1;
&:hover {
    color: blue;
}
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="dark"/>
                <PowerButton theme="dark"/>
                <SocialIcons theme="dark"/>
                <Contact target="_blank" to={{pathname:"mailto:rostranespinoza@gmail.com"}}>
                    <motion.h3
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >Say hi...</motion.h3>
                </Contact>
                <ParticleComponent theme="dark"/>

                <Spaceman>
                    <img src={spaceman} alt="spaceman" />
                </Spaceman>

                <Main>WEB DEVELOPMENT WELCOME TO MY PAGE
                <br /> <br /> 
                <p>If you need flawless product execution and jaw-dropping design that entices your audience — then hello, it’s nice to meet you.</p>
                <br /> <br /> 
                <p>I'm Web Developer JavaScript and PHP. I am enthusiastic about programming languages ​​and obsessed with the quality of the code. You can view source codes of me in my <ContactGit target="_blank" to={{pathname:"https://github.com/facesar?tab=repositories"}}>
                    <motion.span
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >GitHub</motion.span>
                </ContactGit></p>
                
                <br/> <br/>
                <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p>
                </Main>

                <BigTitle text='ABOUT' top='10%' left='30%'/>

            </Box>
        </ThemeProvider>
    )
}

export default AboutPage;