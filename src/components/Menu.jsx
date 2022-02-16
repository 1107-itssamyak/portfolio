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
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                            </div>
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
                                <a href={item.link2}>
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

const MenuItemStyled = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    
    .grid-item{
        min-height: 20rem;
        margin: .25rem 1rem;
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                padding: 0;
                font-size: 1.5rem;
            }
            img{
                border: 1px solid #e0e0e0;
                width: 100%;
                height: 30vh;
                object-fit: cover;
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
    }
`;

export default Menu;