import React from 'react'

// importing styled component
import styled from 'styled-components'

import { age } from '../data/DataImageSection';
import avatar from '../image/my_image.jpg';
import { ButtonStyled } from '../styles/Layout';
import resume from '../resume/resume_samyak_mehta.pdf';

import { motion } from 'framer-motion';
import { imageFramer, fade } from '../animation/animation';
import { useScroll } from '../animation/useScroll';

const ImageSection = () => {
    const [ref, controls] = useScroll(0.3);

    return (
        <ImageSectionStyled ref={ref}>
            <div className="left-content">
                <motion.img
                    src={avatar}
                    alt="avatar"
                    variants={imageFramer}
                    animate={controls}
                />
            </div>

            <motion.div
                className="right-content"
                ref={ref}
                animate={controls}
                variants={fade} >
                <h1>
                    <span>
                        Hey there,
                    </span>
                </h1>
                <p className="paragraph">
                    I love <span>Designing & Developing Websites</span> and am looking for more opportunities to work in coding for them. Looking forward to Collabrate over Projects or Discussions which are fun & meaningful.😃
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
                    variants={fade}
                    initial="hidden"
                    exit="exit"
                    animate={controls}
                    href={resume}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Download CV
                </ButtonStyled>
            </motion.div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled(motion.div)`
    display: flex;
    .left-content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 80%;
            object-fit: cover;
        }
    }
    .right-content{
        h1{
            color: var(--white-color);
            span{
            }
        }
        .paragraph{
            span{
                font-weight: 600;
            }
        }
        .about-info{
            display: flex;
            .info-title{
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                }
            }
        }
    }
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
        }
        .right-content{
            h4 span{
                }
            }
        }
    }
}
`;

export default ImageSection;