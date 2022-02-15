import React from 'react'

// importing styled component
import styled from 'styled-components'

function SmallTitle({ icon, title }) {
    return (
        <SmallTitleStyled >
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled >
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1.5rem;
    p{
        padding-right: 1rem;
        svg{
            font-size: 2rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 1.5rem;
    }
`;

export default SmallTitle;
