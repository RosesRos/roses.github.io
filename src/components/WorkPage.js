import React, {useEffect, useRef} from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";
import Earth from '../assets/Images/earth.png';


const Box = styled.div`
background-color: ${(props) => props.theme.body};
height: 400vh;
position: relative;
display: flex;
align-items: center;
`

const Contact = styled(NavLink)`
color: ${(props) => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(8rem + 15vw);
height: 40vh;
display: flex;
color: white;

@media (max-width: 850px) and (orientation: landscape) {
    left: calc(6rem + 15vw);
}

@media (max-width: 650px) {
    left: calc(4rem + 5vw);
}

@media (max-width: 480px) {
    left: calc(4rem + 8vw);
}
`

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`


const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 2,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current
        let yang = yinyang.current

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
            yang.style.transform = `rotate(${-window.pageYOffset}deg)`
            
        }

        window.addEventListener('scroll', rotate)

        return () => {
            window.removeEventListener('scroll', rotate)
        }
    }, [])

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

                <Main ref={ref} variants={container} initial='hidden' animate='show'>
                    {
                        Work.map((d) => 
                        <Card key={d.id} data={d}/>
                        )
                    }
                </Main>

                <Rotate ref={yinyang}>
                    <img src={Earth} alt="earth" width={80} height={80}/>
                    
                </Rotate>

                <BigTitle text='WORK' top='10%' left='30%'/>

            </Box>
        </ThemeProvider>
    )
}

export default WorkPage;