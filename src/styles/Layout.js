// import styled component
import { motion } from "framer-motion";
import styled from "styled-components";

const MainLayout = styled.div`
    padding: 0 1rem;
`;

const InnerLayout = styled(motion.div)`
    padding: 0 1rem;
`;

const ButtonStyled = styled(motion.button)`
    background-color: var(--button-styled-bg-color);
    color: white;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 1rem;
    padding: 10px 14px;
    margin: 1rem 0;
    text-transform: uppercase;
    position: relative;
    border: none;
    transition: all .4s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
     rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

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
        background-color: white;
    }
    @media screen and (max-width:600px){
        margin: 1.5rem 0;
    }
`;

export { InnerLayout, MainLayout, ButtonStyled };