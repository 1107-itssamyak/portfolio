import React from 'react'

// import styled component
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = ({ navToggle, handleCloseNavbar, checked, themeToggler }) => {
    const toggle = navToggle ? 'nav-toggle' : '';
    return (
        <SidebarStyled className={toggle}>
            <Navigation
                handleCloseNavbar={handleCloseNavbar}
                themeToggler={themeToggler}
                checked={checked}
            />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 18rem;
    position: fixed;
    right: 0;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        display: block;
        transform: translateX(100%);
        z-index: 20;
    }
`

export default Sidebar;