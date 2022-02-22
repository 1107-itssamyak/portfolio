// import styled component
import { motion } from "framer-motion";
import styled from "styled-components";

const MainLayout = styled.div`
    @media screen and (max-width:600px){
    }
`;

const InnerLayout = styled(motion.div)`
    @media screen and (max-width:600px){
    }
`;

const ButtonStyled = styled(motion.a)`
    background-color: var(--primary-color);
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
    @media screen and (max-width:600px){
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