import React from 'react'

// import styled component
import styled from 'styled-components';

function SkillStats({ tools: { title, id } }) {
    return (
        <SkillState key={id}>{title}</SkillState>
    )
}

const SkillState = styled.div`
    width: 70%;
    text-align: center;
    color: var(--font-light-color);
    background-color: var(--background-light-color-2);
    text-transform: uppercase;
    border-radius: .5rem;
    font-weight: bold;
    box-shadow: var(--box-shadow-color) 0px 1px 2px 0px;
    padding: 12px 14px;
    margin: .5rem 0;
    @media screen and (max-width:600px){
        width: 60%;
        padding: 14px;
    }
    @media screen and (max-width:450px){
        width: 100%;
    }
`;

export default SkillStats;
