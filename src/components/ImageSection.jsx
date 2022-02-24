import React from 'react'

// importing styled component
import styled from 'styled-components'

import { age } from '../data/DataImageSection';
// import avatar from '../image/my_image.jpg';
import avatar from '../image/my_image.webp';
import { ButtonStyled } from '../styles/Layout';
import resume from '../resume/resume_samyak_mehta.pdf';

import { motion } from 'framer-motion';
import { imageFramer, fade } from '../animation/animation';
import { useScroll } from '../animation/useScroll';

const ImageSection = () => {
    const [ref, controls] = useScroll(0.25);

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
                animate={controls}
                variants={fade} >
                <h1>
                    <span>Hey there,</span>
                </h1>
                <p className="paragraph">
                    <span>UI/UX development</span> peek my Interests. I find myself developing and designing these. I am looking for more opportunities to work in coding for them.
                    <br /> Looking forward to Collabrate over Projects or Discussions which are fun & meaningful.😃
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
        flex: 0.4;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 100%;
            width: 80%;
            object-fit: cover;
            padding: 1rem;
            overflow: hidden;
            @media screen and (max-width:800px){
                width: 60%;
            }
        }
    }
    
    .right-content{
        flex: 0.6;
        margin: 1rem 0;
        h1{
            font-size: 1.5rem;
            color: var(--white-color);
            padding: .5rem 0;
            span{
            }
        }
        .paragraph{
            font-size: 1rem;
            padding: .5rem 0;
            span{
                font-weight: 600;
            }
        }
        .about-info{
            display: flex;
            font-size: 1rem;
            padding: 1rem 0;
            line-height: 1.5rem;
            .info-title p{
                font-weight: 700;
            }
            .info p{
                padding-left: 2rem;
            }
        }
    }
    @media screen and (max-width:800px){
        flex-direction: column;
    }
}
`;

export default ImageSection;