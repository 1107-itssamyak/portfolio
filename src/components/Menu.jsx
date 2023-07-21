import { motion } from 'framer-motion';
import React from 'react'

// import styled component
import styled from 'styled-components';

import DescriptionIcon from '@material-ui/icons/Description';
import TvIcon from '@material-ui/icons/Tv';

const Menu = ({ data }) => {
    return (
        <MenuItemStyled>
            {data.map((item) => (
                <div className="grid-item" key={item.id}>
                    <div className="portfolio-content">
                        <img
                            src={item.image}
                            alt={item.title} />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <div className='desc'>{item.description}</div>
                    <ul>
                        {
                            item.link1 && <li>
                                <a href={item.link1}><DescriptionIcon /> Source</a>
                            </li>
                        }
                        {
                            item.link2 && <li>
                                <a href={item.link2} ><TvIcon /> Live</a>
                            </li>
                        }
                    </ul>
                </div>
            ))}
        </MenuItemStyled >
    )
}

const MenuItemStyled = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width:1200px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
    @media screen and (max-width:680px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
    }
    h2{
        font-size: 1.2rem;
        margin: 0 1rem;
        font-weight: 600;
        font-style: italic;
    }
    p{
        min-height: 4vh;
        margin: .5rem 1rem;
        font-size: .9rem;
        @media screen and (max-width:600px){
            min-height: 4vh;
        }
    }
    .desc{
        margin: .5rem 1rem;
        font-size: .9rem;
        min-height: 8vh;
        @media screen and (max-width:600px){
            min-height: 4vh;
        }
    }
    
    .grid-item{
        min-height: 20rem;
        overflow: hidden;
        padding: .5rem 0;
        margin: 1rem 0;
        border-radius: .5rem;
        border: 4px solid var(--background-light-color);
        background-color: var(--portfolio-bg);

        .portfolio-content{
            display: flex;
            align-item: center;
            justify-content: center;
            margin: 1rem 0;
            img{
                border-radius: .5rem;
                width: 95%;
                height: 25vh;
                
                @media screen and (max-width:600px){
                    width: 90%;
                    height: 25vh;
                }
            }
        }
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin: .75rem;
            
            li{
                border: 3px solid var(--background-light-color);
                padding: 8px 12px;
                border-radius: .5rem;
                min-width: 20%;
                display: flex;
                justify-content: center;
                align-items:center;
                background-color: var(--portfolio-bg);
                color: var(--white-color);
            }
            li svg{
                font-size: 1rem;
            }
        }
        &:hover{
            transition: .4s ease-in;
            transform: scale(1.02);
        }


        @media screen and (max-width: 800px){
            &:last-child{
                margin-bottom: 4rem;
            }
            padding: .25rem 0;
            min-height: 10vh;
            margin: .5rem 0;
        }
    }
`;

export default Menu;