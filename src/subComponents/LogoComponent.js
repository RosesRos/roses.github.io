import React from "react";
import styled from 'styled-components';
import { DarkTheme } from "../components/Theme";
import { motion } from "framer-motion";

const Logo = styled(motion.h1)`
display: inline-block;
color: ${(props) => props.color === "dark" ? DarkTheme.text : "#000000"};
font-family: 'Pacifico', cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo 
            color={props.theme} 
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
            >
            fre
        </Logo>
    )
}

export default LogoComponent;