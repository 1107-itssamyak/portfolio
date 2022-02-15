import React from 'react'

// import styled component
import styled from 'styled-components'

const ContactItem = ({ phone, contact, github, linkedIn, mail }) => {
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
                    <a href="mailto:samyak.mehta11@gmail.com">
                        {mail}
                    </a>
                    <div>
                        email
                    </div>
                </div>
                <div className='content'>
                    <a href="https://github.com/1107-itssamyak">
                        {github}
                    </a>
                    <div>
                        github
                    </div>
                </div>
                <div className='content'>
                    <a href="https://www.linkedin.com/in/samyak-mehta11/">
                        {linkedIn}
                    </a>
                    <div>
                        linked in
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
    margin-bottom: 2rem;
    
    .content{
        font-size: 1.2rem;
        text-transform: uppercase;
        display: flex;
        justify-content: space-around;
        align-items:center;
        &:not(:last-child){
            margin-bottom: 2rem;
        }
        
        a{
            padding: .5rem;
            width: 20%;
            display: flex;
            justify-content: center;
            align-items:center;
            border: 1px solid var(--border-color);
            border-radius: .5rem;
        }

        div{
            width: 80%;
            display: flex;
            justify-content: center;
            align-items:center;
        }

        @media screen and (max-width: 600px){
            width: 100%;
        }
        svg{
            font-size: 2rem;
        }
    }
`;

export default ContactItem