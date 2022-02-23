import React from 'react'

// importing styled component
import styled from 'styled-components'

function ResumeItem({ year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    
    .left-content{
        width: 35vw;
        position: relative;
        padding-left: 2rem;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 10px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
            @media screen and (max-width: 800px){
                left: -10px;
            }
        }
        p{
            align-text: center;
            display: inline-block;
            padding: .6rem .8rem .2rem .8rem;
            @media screen and (max-width: 800px){
                padding: .4rem .8rem;
            }
        }
        @media screen and (max-width:800px){
            width: 30%;
            padding-left: 1rem;
        }
    }
    
    .right-content{
        text-align: center;
        width: 65vw;
        padding-left: 2rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
            transform: translate(35%, 200%);
            @media screen and (max-width:800px){
                left: -5%;
                width: 1.5rem;
            }
            @media screen and (max-width: 450px){
                left: 5%;
                width: .75rem;
            }
        }
        h5{
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-color);
            @media screen and (max-width:800px){
                font-size: 1.2rem;
            }
        }
        h6{
            font-size: 1.2rem;
            @media screen and (max-width:800px){
                font-size: 1rem;
            }
        }
        p{
            font-size: 1rem;
        }
        @media screen and (max-width: 800px){
            text-align: center;
        }
    }
`;

export default ResumeItem;
