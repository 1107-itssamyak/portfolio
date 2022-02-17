import { motion } from 'framer-motion'
import React from 'react'

// importing styled component
import styled from 'styled-components'
import { fade } from '../animation/animation'
import { useScroll } from '../animation/useScroll'

const Title = ({ title, span }) => {
    const [ref, controls] = useScroll(0.5)

    return (
        <TitleStyled
            ref={ref}
            variants={fade}
            initial="hidden"
            exit="exit"
            animate={controls} >
            <motion.h2>
                {title}<b>
                    <motion.span>{span}</motion.span></b>
            </motion.h2>
        </TitleStyled>
    )
}

const TitleStyled = styled(motion.div)`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 2.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .5rem;
        @media screen and (max-width: 496px){
            font-size: 2.4rem;
        }
        @media screen and (max-width: 370px){
            font-size: 1.8rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 5px;
            width: 10rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 5px;
            width: 4rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: var(--span-theme-color);
            font-size: 4rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 3.2rem;
            }
            @media screen and (max-width: 496px){
                font-size: 2.4rem;
            }
            @media screen and (max-width: 370px){
                font-size: 1.8rem;
            }
        }
    }
`;

export default Title;