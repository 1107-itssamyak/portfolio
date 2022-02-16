import React from 'react'

// importing styled component
import styled from 'styled-components'

import { age } from '../data/DataImageSection';
import avatar from '../image/my_image.jpg';
import { ButtonStyled } from '../styles/Layout';

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt="avatar" />
            </div>

            <div className="right-content">
                <h4><span>Hey there, </span></h4>
                <p className="paragraph">
                    I am a prefinal year CS undergrad, a <span> Front Web developer</span>. UI/UX development peek my Interests and I find myself developing them.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Samyak Mehta</p>
                        <p>: {age}</p>
                        <p>: Indian</p>
                        <p>: English, Hindi </p>
                        <p>: Rajasthan, India</p>
                    </div>
                </div>
                <ButtonStyled>Download Cv</ButtonStyled>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    .left-content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 70%;
            object-fit: cover;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 1.8rem;
            }
        }
        .paragraph{
            padding: .75rem 0;
            span{
                font-weight: 600;
            }
        }
        .about-info{
            display: flex;
            padding-bottom: 1.5rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        .right-content{
            h4 span{
                    font-size: 1.5rem;
                }
            }
        }
    }
}
`;

export default ImageSection;