import React from 'react'

// import styled component
import styled from 'styled-components'

const ContactItem = ({ phone, contact, github, linkedIn, mail, instagram }) => {
    return (
        <ContactItemStyled>
            <div>
                <div className='content'>
                    <a href={`Tel:${contact}`}>
                        {phone}
                    </a>
                    <div>
                        contact no.
                    </div>
                </div>
                <div className='content'>
                    <a
                        href="mailto:samyak.mehta11@gmail.com"
                        rel="noreferrer"
                        target="_blank" >
                        {mail}
                    </a>
                    <div>
                        email
                    </div>
                </div>
                <div className='content'>
                    <a
                        href="https://github.com/1107-itssamyak"
                        rel="noreferrer"
                        target="_blank" >
                        {github}
                    </a>
                    <div>
                        github
                    </div>
                </div>
                <div className='content'>
                    <a
                        href="https://www.linkedin.com/in/samyak-mehta11/"
                        rel="noreferrer"
                        target="_blank" >
                        {linkedIn}
                    </a>
                    <div>
                        linked in
                    </div>
                </div>
                <div className='content'>
                    <a
                        href="https://www.instagram.com/_samyak___/" rel="noreferrer"
                        target="_blank" >
                        {instagram}
                    </a>
                    <div>
                        instagram
                    </div>
                </div>
            </div>
        </ContactItemStyled >
    )
}

const ContactItemStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 80%;
    @media screen and (max-width:800px){
        width: 100%;
    }

    .content{
        font-size: 1.2rem;
        text-transform: uppercase;
        display: flex;
        justify-content: space-around;
        align-items:center;
        &:not(:last-child){
            margin-bottom: 2rem;
            @media screen and (max-width:800px){
                font-size: 1rem;
                margin-bottom: 1rem;
            }
        }
        
        a{
            padding: .4rem;
            width: 20%;
            display: flex;
            justify-content: center;
            align-items:center;
            border: 1px solid var(--border-color);
            border-radius: .5rem;
            @media screen and (max-width:800px){
                padding: 0 1rem;
            }
        }

        div{
            width: 80%;
            display: flex;
            justify-content: center;
            align-items:center;
        }

        @media screen and (max-width: 800px){
            svg{
                font-size: 2rem;
            }
        }
    }
`;

export default ContactItem