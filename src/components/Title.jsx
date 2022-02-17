import { motion } from 'framer-motion'
import React from 'react'

// importing styled component
import styled from 'styled-components'
import { titleFramer, defaultFramer } from '../animation/animation'

const Title = ({ title, span }) => {
    return (
        <TitleStyled>
            <motion.h2
                variants={titleFramer}
                initial="hidden"
                animate="show"
                exit="exit" >
                {title}
                <b>
                    <motion.span
                        variants={defaultFramer}
                        initial="hidden"
                        animate="show"
                        exit="exit" >
                        {span}
                    </motion.span>
                </b>
            </motion.h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 2.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .5rem;
        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
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
            color: rgba(25,29,43,.44);
            font-size: 4.2rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 3.5rem;
            }
            @media screen and (max-width: 496px){
                font-size: 2.5rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }
`;

export default Title;