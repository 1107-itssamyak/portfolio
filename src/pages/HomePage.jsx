import React from 'react'

// importing styled component
import styled from 'styled-components';


const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi, I'm <span>Samyak Mehta</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nihil voluptates ea dolore vel
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
                </p>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        h1, span{
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        p{
            line-height: 1.4rem;
        }
    }
`;

export default HomePage;