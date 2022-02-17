import React from 'react'

// importing styled component
import styled from 'styled-components'

import { age } from '../data/DataImageSection';
import avatar from '../image/my_image.jpg';
import { ButtonStyled } from '../styles/Layout';
import resume from '../resume/resume_samyak_mehta.pdf';

import { AnimatePresence, motion } from 'framer-motion';
import { defaultFramer, imageFramer, spanFramer } from '../animation/animation';

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <AnimatePresence>
                    <motion.img
                        src={avatar}
                        alt="avatar"
                        variants={imageFramer}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    />
                </AnimatePresence>
            </div>

            <div className="right-content">
                <h1>
                    <motion.span
                        variants={spanFramer}
                        initial="hidden"
                        animate="show"
                        exit="exit" >
                        Hey there,
                    </motion.span>
                </h1>
                <p className="paragraph">
                    I love <motion.span>Designing & Developing Websites</motion.span> and am looking for more opportunities to work in coding for them. Looking forward to Collabrate over Projects or Discussions which are fun & meaningful.
                    <br />
                    Please see the attached <motion.span>Resume</motion.span>! 😃
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
                    variants={defaultFramer}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    Download CV
                </ButtonStyled>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 3rem;
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