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
                <h1>Hi, I'm <span>Samyak Mehta</span></h1>
                <div>
                    I am a Prefinal year CS Undergraduate 😄,
                    <br className='br1' />
                    <span> Front-end Web Developer</span>.
                    <br />
                    I build modern looking and responsive websites,
                    <br className='br1' />
                    providing User wonderful <span>User Experience</span>
                    <br />
                    I come from Udaipur City, also known as City of Lakes, Rajasthan, India.
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