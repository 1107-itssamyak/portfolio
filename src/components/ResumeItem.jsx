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
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 2rem;
    }
    
    .left-content{
        width: 30%;
        padding-left: 2rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            border-radius: .5rem;
            padding: .25rem .5rem;
            background-color: rgba(250, 250, 250, 0.2);
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 1.6rem;
            padding-bottom: .4rem;
            margin: 0 10px 0 .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.2rem;
            margin: 0 10px .4rem 1rem;
        }
        p{
            margin: 0 10px .4rem 1rem;
        }
    }
`;

export default ResumeItem;
