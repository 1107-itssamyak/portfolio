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
        svg{
        }
    }
    h3{
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
