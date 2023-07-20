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

    const handleResumeClick = () => {
        window.open(resume);
    }

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
                    I am a highly motivated and creative Full-Stack Web Developer. With a passion for crafting visually appealing and intuitive websites that provide an exceptional User Experience. With a strong academics, I am adept at using cutting-edge technologies and frameworks to bring innovative ideas to life. I thrive in collaborative environments and continuously seek opportunities to expand my skills and contribute to meaningful projects. I am excited about the endless possibilities in the world of technology and aim to create digital experiences that leave a lasting impression.
                    <br />
                    <br />
                    Looking forward to Collabrate over Projects or Discussions which are fun & meaningful.😃
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
                    onClick={handleResumeClick}
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
            width: 100%;
            object-fit: cover;
            padding: 5rem;
            overflow: hidden;
            @media screen and (max-width:600px){
                width: 70%;
                padding: 1rem;
            }
        }
    }
    
    .right-content{
        flex: 0.6;
        margin: 1rem 0;
        padding-right: 2rem;
        h1{
            font-size: 1.5rem;
            color: var(--white-color);
            padding: .5rem 0;
            @media screen and (max-width:800px){
                padding: .25rem 0;
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
        @media screen and (max-width:800px){
            padding-right: 0;
        }
    }
    @media screen and (max-width:800px){
        flex-direction: column;
    }
}
`;

export default ImageSection;