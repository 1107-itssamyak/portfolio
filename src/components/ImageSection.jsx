import React from 'react'

// importing styled component
import styled from 'styled-components'

import { age } from '../data/DataImageSection';
import avatar from '../image/my_image.jpg';

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt="avatar" />
            </div>

            <div className="right-content">
                <h4><span>Hey there, </span></h4>
                <p className="paragraph">
                    I am a prefinal year CS undergrad, a <span> Front Web developer</span>. I peek my interests in UI/UX development and am always found developing them. `
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

const ButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    margin: 1rem 0 1rem 0;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;

const ImageSectionStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .right-content{
        margin: 0 2rem;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 1.8rem;
            }
        }
        .paragraph{
            padding: 1rem 1.5rem 1rem 0;
            span{
                font-weight: 600;
            }
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
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
}
`;
export default ImageSection;