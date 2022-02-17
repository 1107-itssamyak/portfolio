import React from 'react'

// importing styled component
import styled from 'styled-components';

// import framer motion
import { motion } from 'framer-motion';
import { fade } from '../animation/animation';

const HomePage = () => {
    return (
        <HomePageStyled
            id="home"
            variants={fade}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="typography">
                <h1>Hi, I'm <span>Samyak Mehta</span></h1>
                <p>
                    I am a Prefinal year CS Undergraduate 😄,
                    <br />
                    a <span>Front-end Web developer</span>.
                    <br />
                    UI/UX development peek my Interests and I find myself developing them. I live in Udaipur, Rajasthan.
                    <br />
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
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        h1{
            font-size: 2.5rem;
            margin-bottom: 1rem;
            @media screen and (max-width:600px){
                font-size: 2rem;
            }
        }
        span{
            font-size: 2.5rem;
            @media screen and (max-width:600px){
                font-size: 2rem;
            }
        }
        p{
            font-size: 1rem;
            line-height: 1.4rem;
            span{
                font-size: 1rem;
            }
            @media screen and (max-width:600px){
                font-size: 1rem;
            }
        }
    }
`;

export default HomePage;