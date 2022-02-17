import { motion } from 'framer-motion';
import React from 'react'

// import styled component
import styled from 'styled-components';

const Menu = ({ data }) => {
    return (
        <MenuItemStyled>
            {data.map((item) => {
                return (
                    <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <img
                                src={item.image}
                                alt={item.title} />
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                        <ul>
                            <li>
                                <a href={item.link1}>
                                    <i className="fa-solid fa-file-lines"></i>
                                    Source
                                </a>
                            </li>
                            <li>
                                <a href={item.link2} >
                                    <i className="fa-solid fa-tv"></i>
                                    Live
                                </a>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </MenuItemStyled >
    )
}

const MenuItemStyled = styled(motion.div)`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    h6{
        padding: 1rem 0 .5rem 0;
        font-size: 1.3rem;
        @media screen and (max-width:600px){
            font-size: 1.1rem;
        }
    }
    p{
        height: 8vh;
        font-size: .9rem;
        @media screen and (max-width:600px){
            min-height: 4vh;
        }
    }
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    
    .grid-item{
        min-height: 20rem;
        margin: .25rem .5rem;
        overflow: hidden;
        .portfolio-content{
            display: flex;
            align-item: center;
            justify-content: center;
            img{
                border-radius: 1rem;
                width: 90%;
                height: 30vh;
                @media screen and (max-width:800px){
                    width: 100%;
                    height: 40vh;
                }
                @media screen and (max-width:600px){
                    height: 30vh;
                }
            }
        }
        ul{
            margin: .75rem 0 0 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            i{
                margin: 0 .5rem;
            }
        }
        @media screen and (max-width:600px){
            margin: 0;
        }
    }
`;

export default Menu;