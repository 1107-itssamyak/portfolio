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
        padding-right: 1rem;
        svg{
            font-size: 2rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 1.5rem;
    }
    @media screen and (max-width: 800px){
        p{
            padding-right: 1rem;
            svg{
                font-size: 1.5rem;
            }
        }
        h3{
            font-size: 1rem;
        }
    }
`;

export default SmallTitle;
