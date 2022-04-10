import React from "react";
import styled from "styled-components";
import Book from "../assets/Images/book.jpg";
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ServiceComponent from "./ServiceComponent";
import {Blogs} from '../data/BlogData';
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
background-image: url(${Book});
background-attachment: fixed;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

const SecondContainer = styled.div`
background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
width: 100%;
height: auto;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);

@media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
}
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

const ServicePage = () => {

    return (
        
        <MainContainer variants={container} 
                initial='hidden' 
                animate='show'
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.5
                    }
                }}
            >
            <SecondContainer>
                <PowerButton />
                <LogoComponent />
                <SocialIcons />
                
                <Center>
                    <Grid>
                        {
                            Blogs.map((blog) => {
                                return <ServiceComponent key={blog.id} blog={blog}/>
                            })
                        }
                    </Grid>
                </Center>
                    
            </SecondContainer>
        </MainContainer>
    )
}

export default ServicePage;