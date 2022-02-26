import React from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';

// importing styled component
import styled from 'styled-components'

import { currYear } from '../data/DataImageSection';
import { IconButton } from '@material-ui/core';

const Navigation = ({ handleCloseNavbar, checked, themeToggler }) => {
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
                    <a aria-label='nav-link-tag1' href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag2' href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag3' href="#timeline">Timeline</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag4' href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag5' href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a aria-label='nav-link-tag6' href="#contact">Contact</a>
                </li>
            </ul>
            <ul className="nav-items">
                <li className="nav-item">
                    <div className="light-dark-mode">
                        <label htmlFor="theme-toggler">
                            <Brightness4Icon />
                        </label>
                        <Switch
                            checked={checked}
                            size="medium"
                            id="theme-toggler"
                            name="theme-toggler"
                            onClick={themeToggler} />
                    </div>
                </li>
            </ul>
            <footer className="footer">
                <p>&copy;{currYear}<b> Samyak Mehta</b></p>
            </footer>
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

        /* check via intersection observer the presence of nav a */
        /* .active-class{
            background-color: var(--primary-color-light);
            color: white;
        } */
        
        .nav-item{
            display: block;
            padding: .1rem .5rem;
            border-radius: .5rem;
            a{
                display: block;
                padding: .3rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                color: var(--white-color);

                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
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

    footer{
        position: absolute;
        bottom: 0;
        border-top: 3px solid var(--border-color);
        width: 100%;
        p{
            padding: 1rem 0;
            text-align: center;
            font-weight: 700;
            b{
                font-weight: 700;
            }
        }
    }
`;

export default Navigation;