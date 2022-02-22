// import styled component
import { motion } from "framer-motion";
import styled from "styled-components";

const MainLayout = styled.div`
    padding: 0 1rem;
`;

const InnerLayout = styled(motion.div)`
    padding: 0 1rem;
`;

const ButtonStyled = styled(motion.a)`
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1rem;
    padding: 8px 16px;
    margin: 1rem 0;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .25rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
    @media screen and (max-width:600px){
        margin: 1.5rem 0;
    }
`;

export { InnerLayout, MainLayout, ButtonStyled };