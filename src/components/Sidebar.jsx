import React from 'react'

// import styled component
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = ({ navToggle }) => {
    const toggle = navToggle ? 'nav-toggle' : '';
    return (
        <SidebarStyled className={toggle}>
            <Navigation />
        </ SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`

export default Sidebar;