import React from 'react'

// importing styled component
import styled from 'styled-components';

// import framer motion
import { motion } from 'framer-motion';
import { HomePageFramer } from '../animation/animation';
import { useScroll } from '../animation/useScroll';

const HomePage = () => {
    const [ref, controls] = useScroll(0.3);

    return (
        <HomePageStyled
            ref={ref}
            variants={HomePageFramer}
            animate={controls}
            id="home" >
            <div className="typography">
                <h1>Hi, I'm <span>Samyak Mehta</span></h1>
                <p>
                    I am a Prefinal year CS Undergraduate 😄,
                    a <span>Front-end Web developer</span>.
                    <br />
                    I live in Udaipur, Rajasthan.
                    I'm working on improving my skills in scope of
                    <br />
                    <span>Full Stack Web Development</span>.
                </p>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled(motion.header)`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

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
            @media screen and (max-width:600px){
                font-size: 1.2rem;
            }
        }
        p{
            font-size: 1rem;
            line-height: 1.5rem;
        }
        @media screen and (max-width: 600px){
            padding: 0 1rem;
        }
    }
`;

export default HomePage;