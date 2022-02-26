import React from 'react'

// importing styled component
import styled from 'styled-components'

function ResumeItem({ year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <p>{year}</p>
            <div className='title'>{title}</div>
            <div className='subtitle'>{subTitle}</div>
            <div className='text'>{text}</div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;

    &:not(:last-child){
        margin-bottom: 2rem;
    }
    
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

    padding-left: 2rem;
    p{
        display: inline-block;
        padding: .5rem 0;
        @media screen and (max-width: 800px){
            padding: .4rem 0;
        }
    }    
    
    .title{
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: .5rem;
        @media screen and (max-width:800px){
            font-size: 1.2rem;
        }
    }
    .subtitle{
        font-size: 1rem;
        @media screen and (max-width:800px){
            font-size: 1rem;
        }
    }
    .text{
        font-size: 1rem;
    }
`;

export default ResumeItem;
