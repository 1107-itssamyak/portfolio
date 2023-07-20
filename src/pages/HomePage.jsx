import React from 'react'

// importing styled component
import styled from 'styled-components';

// import framer motion
import { motion } from 'framer-motion';
import { HomePageFramer } from '../animation/animation';
import { useScroll } from '../animation/useScroll';
import { KeyboardArrowDown } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const HomePage = () => {
    const [ref, controls] = useScroll(0.25);

    const handleClick = () => {
        setTimeout(() => {
            document.body.scrollTop = 600;
            document.documentElement.scrollTop = 600;
        }, 100);
    }

    return (
        <HomePageStyled
            ref={ref}
            variants={HomePageFramer}
            animate={controls}
            id="home" >
            <div className="typography">
                <h1>Greetings! 😄 I am<span> Samyak Mehta</span></h1>
                <div>
                    A Computer Science Undergraduate 😄,
                    <br />
                    hailing from the enchanting City of Lakes, Udaipur, Rajasthan, India.
                    <br />
                    My passion lies in <span> Full-Stack Web Development </span>,
                    <br />
                    where I specialize in crafting visually captivating and user-centric websites.
                    <br />
                    With a keen eye for detail and a focus on delivering exceptional <span> User Experience, </span>
                    <br />
                    I take pride in building responsive and modern-looking web applications. 
                </div>
            </div>

            <IconButton
                name="arrow-down button"
                aria-label="arrow-down button"
                className='arrow-down'
                onClick={handleClick}>
                <KeyboardArrowDown />
            </IconButton>
        </HomePageStyled >
    )
}

const HomePageStyled = styled(motion.header)`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    padding-top: 2rem;
    position: relative;
    
    .typography{
        width: 100%;
        text-align: center;
        padding: 0 2rem;
        h1{
            font-weight: 600;
            font-size: 2rem;
            line-height: 2.5rem;
            margin: .75rem 0;
            @media screen and (max-width:1000px){
                font-size: 1.5rem;
            }
        }
        div{
            z-index: 1;
            font-size: 1rem;
            line-height: 1.5rem;
            .br1{
                    display: none;
                    @media screen and (max-width: 650px){
                        display: block;
                    }
                    @media screen and (max-width: 450px){
                        display: none;
                    }
                }
        }
        @media screen and (max-width: 1000px){
            width: 80%;
        }
        @media screen and (max-width: 600px){
            width: 100%;
            padding: 0 1rem;
        }
    }
`;

export default HomePage;