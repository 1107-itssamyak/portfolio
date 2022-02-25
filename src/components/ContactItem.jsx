import React from 'react'

// import styled component
import styled from 'styled-components'

const ContactItem = ({ phone, contact, github, linkedIn, mail, instagram }) => {
    return (
        <ContactItemStyled>
            <div>
                <div className='content'>
                    <a
                        href={`Tel:${contact}`}
                        aria-label='contact-link-tag1' >{phone}</a>
                    <div>contact no.</div>
                </div>
                <div className='content'>
                    <a
                        href="mailto:samyak.mehta11@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag2'
                    >
                        {mail}
                    </a>
                    <div>email</div>
                </div>
                <div className='content'>
                    <a
                        href="https://github.com/1107-itssamyak"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag3'>
                        {github}
                    </a>
                    <div>github</div>
                </div>
                <div className='content'>
                    <a
                        href="https://www.linkedin.com/in/samyak-mehta11/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag4'>
                        {linkedIn}
                    </a>
                    <div>linked in</div>
                </div>
                <div className='content'>
                    <a
                        href="https://www.instagram.com/_samyak___/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag5'>
                        {instagram}
                    </a>
                    <div>instagram</div>
                </div>
            </div>
        </ContactItemStyled >
    )
}

const ContactItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media screen and (max-width:800px){
        width: 100%;
    }

    .content{
        text-transform: uppercase;
        display: flex;
        justify-content: space-around;
        align-items:center;
        font-size: 1.2rem;
        margin-bottom: 4rem;
        padding: .25rem 0;
        &:not(:last-child){
            margin: 0 0 1rem 0;
        }
        
        a{
            width: 15%;
            display: flex;
            justify-content: center;
            align-items:center;
            padding: 1rem;
            border-radius: 50%;
            @media screen and (max-width:800px){
                width: 10%;
                padding: .5rem;
                border: none;
            }
        }
        
        div{
            width: 50%;
            text-align: center;
            font-size: 1.2rem;
        }
    }
`;

export default ContactItem