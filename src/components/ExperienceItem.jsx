import React from 'react'

// importing styled component
import styled from 'styled-components'

function ExperienceItem({ duration, title, firmName, text, location, skills }) {
    return (
        <ExperienceItemStyled>
            <div className='seprator'>
                <div className='title'>{title}</div>
                <p>{duration}</p>
            </div>

            <div className='seprator'>
                <div className='firmName'>{firmName}</div>
                <div className='location'>{location}</div>
            </div>

            <div className='text'>{text}</div>
            <div className='skills'>
                <strong>
                    Tech Stack:
                </strong>
                {skills.join(', ')}
            </div>
        </ExperienceItemStyled>
    )
}

const ExperienceItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
    padding-left: 2rem;

    &:not(:last-child){
        margin-bottom: 2rem;
    }
    
    &::before{
        content: '';
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
    
    .seprator{
        display: flex;
        justify-content: space-between;

        p{
            display: inline-block;
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
                font-size: 1rem;
            }
        }

        .firmName{
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: .5rem;
        }
    
        .location{
            font-size: 1rem;
        }
    
        @media screen and (max-width:800px){
            font-size: 1rem;
            flex-direction: column;
        }
    }
    
    .text{
        margin: 1rem 0;
        white-spacing: nowrap;
        text-align: justify;
    }

    .skills{
        text-align: left;

        strong{
            font-weight: 700;
            margin-right: .2rem;
        }
    }
`;

export default ExperienceItem;
