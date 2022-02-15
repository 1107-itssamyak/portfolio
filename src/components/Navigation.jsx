import React from 'react'

import avatar from '../image/my_image.jpg'

// importing styled component
import styled from 'styled-components'

import { NavLink } from 'react-router-dom';
import { currYear } from '../data/DataImageSection';

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="avatar_image" />
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact="true">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact="true">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/timeline" exact="true">Timeline</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" exact="true">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact="true">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>&copy; {currYear}<b> Samyak Mehta</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
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
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;

export default Navigation;