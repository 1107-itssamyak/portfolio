import { motion } from 'framer-motion';
import React from 'react'

// import styled component
import styled from 'styled-components';

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
            ))}
        </MenuItemStyled >
    )
}

const MenuItemStyled = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width:1200px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:800px){
        grid-template-columns: repeat(1, 1fr);
    }
    h2{
        font-size: 1.2rem;
        margin: 1rem;
        font-weight: 600;
        font-style: italic;
    }
    p{
        height: 8vh;
        margin: 1rem;
        font-size: 1rem;
        @media screen and (max-width:600px){
            min-height: 4vh;
        }
    }
    
    .grid-item{
        min-height: 20rem;
        overflow: hidden;
        padding: .5rem 0;
        margin: 1rem 0;
        border-radius: .75rem;
        background-color: var(--background-light-color) ;

        .portfolio-content{
            display: flex;
            align-item: center;
            justify-content: center;
            margin: 1rem 0;
            img{
                border-radius: .75rem;
                width: 80%;
                height: 25vh;
                @media screen and (max-width:1000px){
                    width: 80%;
                }
                @media screen and (max-width:600px){
                    width: 70%;
                }
            }
        }
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-bottom: .75rem;

            li{
                border: 1px solid var(--border-color);
                padding: 8px 12px;
                border-radius: .75rem;
            }
            li i{
                padding-right: 2.75rem;
            }
        }
        @media screen and (max-width: 800px){
            padding: .25rem 0;
            margin: .75rem 0;
        }
    }
`;

export default Menu;