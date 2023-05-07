import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Design from "../dataReact/Design";
import Developer from "../dataReact/Developer";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
background-color: ${(props) => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row-reverse;

@media (min-height: 200px) and (max-height: 450px) {
    height: 250vh;
}

@media (max-width: 650px) {
    flex-direction: column-reverse;
    grid-gap: 2rem;
    justify-content: center;
    height: 160vh;
}

@media (max-width: 480px) {
    flex-direction: column-reverse;
    grid-gap: 2rem;
    justify-content: center;
    height: 160vh;
}
`

const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
background: transparent;
padding: 2rem;
width: 30vw;
height: 70vh;
line-height: 1.5;
z-index: 3;
display: flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Ubuntu Mono', monospace;

&:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    cursor: pointer;
}

@media (min-height: 200px) and (max-height: 450px) {
    height: 150vh;
}

@media (max-width: 650px) {
    width: 50vw;
    height: 50vh;
}

@media (max-width: 480px) {
    width: 50vw;
    height: 50vh;
}

@media (max-width: 390px) {
    height: 55vh;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
&>*:first-child {
    margin-right: 2rem;
}
`

const Description = styled.div`
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
}

ul {
    margin-left: 2rem;
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

const SkillsPage = () => {
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
                <BigTitle text='SKILLS' top='10%' left='30%'/>
                <ParticleComponent theme="dark"/>
                <Main>
                    <Title>
                        <Design width={40} height={40} fill='currentColor'/>
                        Tools
                    </Title>
                    <Description>I love to create design which speaks, Keep it clean, minimal and simple.</Description>
                    <Description>
                        <strong>SKILLS</strong>
                        <ul>
                            <li>Smarty</li>
                            <li>Vuejs</li>
                            <li>LESS</li>
                            <li>SASS</li>
                            <li>JQquery</li>
                            <li>Pug</li>
                            <li>Figma</li>
                            <li>WebPack</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Developer width={40} height={40} fill='currentColor'/>
                        Web-Development
                    </Title>
                    <Description>I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.</Description>
                    <Description>
                        <strong>SKILLS</strong>
                        <ul>
                            <li>HTML, html5</li>
                            <li>CSS, CSS3</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Bootstrap</li>
                            <li>MySQL</li>
                            <li>Git / GitHub</li>
                            <li>Wordpress</li>
                        </ul>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default SkillsPage;