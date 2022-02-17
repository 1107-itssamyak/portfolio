// import styled component
import { motion } from "framer-motion";
import styled from "styled-components";

const MainLayout = styled.div`
    margin-bottom: 4rem;
    padding: 0 1.5rem;
    @media screen and (max-width:600px){
        padding: .5rem 1rem;
    }
`;

const InnerLayout = styled(motion.div)`
    padding: 1.5rem 0;
    @media screen and (max-width:600px){
        padding: 1rem 0;
    }
`;

const ButtonStyled = styled(motion.a)`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 5px;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    margin: .75rem 0;
    @media screen and (max-width:600px){
        padding: .75rem 1.5rem;
    }
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;

export { InnerLayout, MainLayout, ButtonStyled };