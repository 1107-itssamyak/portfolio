import React from 'react';

// import styled component
import styled from 'styled-components';

import { MainLayout, InnerLayout, ButtonStyled } from '../styles/Layout';
import Title from '../components/Title';
import ContactItem from '../components/ContactItem';
import { GitHub, LinkedIn, Mail, Phone, Instagram } from '@material-ui/icons';

const ContactPage = () => {
    const phone = <Phone />;
    const github = <GitHub />;
    const linkedIn = <LinkedIn />;
    const mail = <Mail />;
    const instagram = <Instagram />
    const pageName = "contact";

    return (
        <MainLayout>
            <Title title={pageName} span={pageName} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message</label>
                                <textarea name="textarea" id="textarea" cols="20" rows="4"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <ButtonStyled type='submit'>Send Message</ButtonStyled>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem
                            phone={phone}
                            title="Phone"
                            contact="+91-8890992278"
                            email="samyak.mehta11@gmail.com"
                            github={github}
                            linkedIn={linkedIn}
                            mail={mail}
                            instagram={instagram}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: .75rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }            
        }
    }
`;

export default ContactPage;