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
    p{
        font-size: 1rem;
    }
    h3{
        font-size: 1.2rem;
        margin-left: 0.75rem;
        font-weight: 600;
        color: var(--white-color);
    }
    @media screen and (max-width: 800px){
        p{
            svg{
            }
        }
        h3{
        }
    }
`;

export default SmallTitle;
