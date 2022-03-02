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
                        aria-label='contact-link-tag1' >
                        {phone}
                        <div>contact no.</div>
                    </a>
                </div>
                <div className='content'>
                    <a
                        href="mailto:samyak.mehta11@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag2' >
                        {mail}
                        <div>email</div>
                    </a>
                </div>
                <div className='content'>
                    <a
                        href="https://github.com/1107-itssamyak"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag3'>
                        {github}
                        <div>github</div>
                    </a>
                </div>
                <div className='content'>
                    <a
                        href="https://www.linkedin.com/in/samyak-mehta11/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag4'>
                        {linkedIn}
                        <div>linked in</div>
                    </a>
                </div>
                <div className='content'>
                    <a
                        href="https://www.instagram.com/_samyak___/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label='contact-link-tag5'>
                        {instagram}
                        <div>instagram</div>
                    </a>
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
        justify-content: center;
        align-items:center;
        font-size: 1.2rem;
        margin-bottom: 4rem;
        padding: .25rem 0;
        &:not(:last-child){
            margin: 0 0 1rem 0;
        }
        
        a{
            width: 80%;
            display: flex;
            justify-content: space-evenly;
            align-items:center;
            border: 1px solid var(--primary-color);
            border-radius: 10px;
            padding: .75rem;
            margin: .25rem;
            @media screen and (max-width:800px){
                width: 100%;
                padding: .75rem .5rem;
            }
            @media screen and (max-width:800px){
                padding: .5rem;
            }

            div{
                white-space: nowrap;
                width: 50%;
                text-align: center;
                font-size: 1.2rem;
            }
        }
    }
`;

export default ContactItem