import React from 'react'

// importing styled component
import styled from 'styled-components'

import { age } from '../data/DataImageSection';
import avatar from '../image/my_image.jpg';
import { ButtonStyled } from '../styles/Layout';


const ImageSection = () => {
    const resume = 'https://drive.google.com/file/d/1DjpGBRpU7G2A2x_fPYgvjyT4fg6rfbZw/view?usp=sharing'
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt="avatar" />
            </div>

            <div className="right-content">
                <h1><span>Hey there,</span></h1>
                <p className="paragraph">
                    I love <span>designing Websites</span> and am looking for more opportunities to work in coding for them. Looking forward to Collabrate over Projects or Discussions which are fun & meaningful.
                </p>
                <p className="paragraph">
                    Please see the attached <span>Resume</span>! 😃
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
                <ButtonStyled
                    href={resume}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Download Cv
                </ButtonStyled>
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
        h1{
            padding: .1rem 0;
            color: var(--white-color);
            span{
                font-size: 2rem;
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