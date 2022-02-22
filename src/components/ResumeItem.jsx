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
    }
    
    .left-content{
        width: 30%;
        position: relative;
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
            @media screen and (max-width:600px){
                left: -10px;
            }
        }
        p{
            align-text: center;
            border-radius: .5rem;
            background-color: rgba(250, 250, 250, 0.2);
            display: inline-block;
            @media screen and (max-width: 800px){
            }
        }
        @media screen and (max-width:600px){
        }
    }
    
    .right-content{
        text-align: center;
        width: 100%;
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
            @media screen and (max-width:600px){
                left: 5%;
                width: 1rem;
            }
        }
        h5{
            color: var(--primary-color);
            @media screen and (max-width:600px){
            }
        }
        h6{
            @media screen and (max-width:600px){
            }
        }
        p{
        }
        @media screen and (max-width: 800px){
            text-align: left;
        }
    }
`;

export default ResumeItem;
