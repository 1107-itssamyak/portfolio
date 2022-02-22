import { motion } from 'framer-motion'
import React from 'react'

// importing styled component
import styled from 'styled-components'
import { fade } from '../animation/animation'
import { useScroll } from '../animation/useScroll'

const Title = ({ title }) => {
    const [ref, controls] = useScroll(0.2)

    return (
        <TitleStyled
            ref={ref}
            variants={fade}
            initial="hidden"
            exit="exit"
            animate={controls} >
            <motion.h2>
                {title}
            </motion.h2>
        </TitleStyled>
    )
}

const TitleStyled = styled(motion.div)`
    position: relative;
    h2{
        color: var(--white-color);
        text-transform: uppercase;
        position: relative;
        font-style: italic;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        @media screen and (max-width:600px){
            font-size: 1.2rem;
        }
        &::before{
            content: "";
            position: absolute;
            width: 10rem;
            top: 120%;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            width: 4rem;
            top: 120%;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
    }
`;

export default Title;