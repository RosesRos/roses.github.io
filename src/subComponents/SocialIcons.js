import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DarkTheme } from '../components/Theme';
import Github from '../dataReact/Github';
import Linkedin from '../dataReact/Linkedin';
import { motion } from 'framer-motion';


const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;
&>*:not(:last-child) {
    margin: 0.5rem 0;
}

@media (min-height: 200px) and (max-height: 480px) {
    position: absolute;
}
`
const Line = styled(motion.span)`
width: 0.2rem;
height: 2rem;
background-color: ${(props) => props.color === "dark" ? DarkTheme.text : "#000000"};

@media (max-width: 850px) and (orientation: landscape) {
    background-color: ${(props) => props.color === "#000000" ? "#000000" : DarkTheme.text}
}

@media (max-width: 650px) {
    background-color: ${(props) => props.color === "#000000" ? "#000000" : DarkTheme.text}
}
`

const SocialIcons = (props) => {

    let x = window.matchMedia('(max-width: 850px)')

    const colorGithub = () => {
        if (x.matches) {
            return props.theme === "#000000" ? "#000000" : DarkTheme.text
        } else {
            return props.theme === "dark" ? DarkTheme.text : "#000000"
        }
    }

    const colorLinkedin = () => {
        if (x.matches) {
            return props.theme === "#000000" ? "#000000" : DarkTheme.text
        } else {
            return props.theme === "dark" ? DarkTheme.text : "#000000"
        }
    }
    
    return (
        <>
            <Icon>
                <motion.div
                    initial={{
                        transform: 'scale(0)'
                    }}
                    animate={{
                        scale: [0,1,1,5,1]
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        delay: 1.4
                    }}
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.9}}
                >
                    <NavLink style={{color: "inherit"}} target="_blank" to={{pathname:"https://github.com/facesar?tab=repositories"}}>
                        <Github width={25} height={25} fill={colorGithub()}/>
                    </NavLink>
                </motion.div>

                <motion.div
                    initial={{
                        transform: 'scale(0)'
                    }}
                    animate={{
                        scale: [0,1,1,5,1]
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        delay: 1.2
                    }}
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.9}}
                >
                    <NavLink style={{color: "inherit"}} target="_blank" to={{pathname:"https://www.linkedin.com/in/fabio-rostran-631093214/"}}>
                        <Linkedin width={30} height={30} fill={colorLinkedin()}/>
                    </NavLink>
                </motion.div>

                <Line color={ props.theme } 
                    initial={{
                        height: 0,
                    }}
                    animate={{
                        height: '2rem',
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        delay: 0.8
                    }}
                />
            </Icon>
        </>
    )
}

export default SocialIcons;