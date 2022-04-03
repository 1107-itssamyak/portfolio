import React from 'react'

// import styled component
import styled from 'styled-components';

function SkillStats({ tools: { title, id } }) {
    return (
        <SkillState key={id}>{title}</SkillState>
    )
}

const SkillState = styled.div`
    width: 60%;
    text-align: center;
    color: var(--font-light-color);
    background-color: var(--background-light-color-2);
    text-transform: uppercase;
    border-radius: .5rem;
    font-weight: bold;
    padding: 8px 12px;
    margin: .5rem 0;
    @media screen and (max-width:600px){
        width: 70%;
    }
    @media screen and (max-width:450px){
        width: 100%;
    }
`;

export default SkillStats;
