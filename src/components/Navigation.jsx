import React from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';

// importing styled component
import styled from 'styled-components'


import { IconButton } from '@material-ui/core';

const Navigation = ({ handleCloseNavbar, checked, themeToggler }) => {
    const removeColorAll = () => {
        document.querySelector('#id_home').classList.remove('active-class');
        document.querySelector('#id_about').classList.remove('active-class');
        document.querySelector('#id_timeline').classList.remove('active-class');
        document.querySelector('#id_skills').classList.remove('active-class');
        document.querySelector('#id_portfolio').classList.remove('active-class');
        document.querySelector('#id_contact').classList.remove('active-class');
    }

    const handleClick = (e) => {
        removeColorAll();

        let name = '#' + e.target.id;
        document.querySelector(`${name}`).classList.add('active-class');
    }

    return (
        <NavigationStyled id='navigation'>
            <div className="close-button" onClick={handleCloseNavbar}>
                <IconButton
                    aria-label="sidenav-close-button" >
                    <CloseIcon />
                </IconButton>
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <a aria-label='nav-link-tag1' id="id_home" className='active-class' onClick={handleClick} href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag2' id="id_about" onClick={handleClick} href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag3' id="id_timeline" onClick={handleClick} href="#timeline">Timeline</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag4' id="id_skills" onClick={handleClick} href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag5' id="id_portfolio" onClick={handleClick} href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag6' id="id_contact" onClick={handleClick} href="#contact">Contact</a>
                </li>
            </ul>
            <ul className="nav-items">
                <li className="nav-item">
                    <div className="light-dark-mode" onClick={themeToggler}>
                        <Brightness4Icon />
                        <Switch
                            checked={checked}
                            size="medium"
                            id="theme-toggler"
                            name="theme-toggler"
                            onClick={themeToggler} />
                    </div>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .close-button{
        position: absolute;
        right: 5%;
        top: 2%;
        display: none;
        @media screen and (max-width:1200px){
            display: block;
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        
        .nav-item{
            display: block;
            padding: .25rem;fire
            border-radius: .5rem;

            a{
                display: block;
                padding: .6rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                color: var(--white-color);
                border-radius: .5rem;
                
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    border-radius: .5rem;
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
`;

export default Navigation;