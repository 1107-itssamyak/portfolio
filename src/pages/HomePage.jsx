import React from 'react'

// importing styled component
import styled from 'styled-components';

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi, I'm <span>Samyak Mehta</span></h1>
                <p>
                    I am a Prefinal year CS Undergraduate 😄,
                    <br />
                    a <span>Front-end Web developer</span>.
                    UI/UX development peek my Interests and find myself developing them.
                    <br />
                    I live in Udaipur, Rajasthan.
                    <br />
                    I'm working on improving my skills in scope of <span>Full Stack Web Development</span>.
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
        h1{
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        span{
            font-size: 2.5rem;
        }
        p{
            line-height: 1.4rem;
            span{
                font-size: 1rem;
            }
        }
    }
`;

export default HomePage;