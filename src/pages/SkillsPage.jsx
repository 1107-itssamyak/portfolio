import React from 'react'
import SkillStats from '../components/SkillStats';

// import styled component
import styled from 'styled-components'
import Title from '../components/Title';

// importing svg's
import web_development_svg from '../image/web_developer.svg';
import thinking_svg from "../image/thought_process.svg";
import server_svg from "../image/server_status.svg";
import knowledge_svg from "../image/knowledge.svg";

// importing data
import { web_development, web_services, tools, programming } from '../data/DataSkillSection';

import { motion } from 'framer-motion';
import { useScroll } from '../animation/useScroll';
import { imageFramer } from '../animation/animation';

const SkillsPage = () => {
    const pageName = 'My Skills';
    const [image_1, image_control_1] = useScroll(0.2);
    const [image_2, image_control_2] = useScroll(0.2);
    const [image_3, image_control_3] = useScroll(0.2);
    const [image_4, image_control_4] = useScroll(0.2);

    return (
        <SkillsStyled id="skills">
            <Title title={pageName} />

            <ContainerStyled>
                <div className="left-content">
                    <div className='heading'>
                        Web Development
                    </div>
                    <div className="subheading">
                        I have worked on various <span>Web Development Projects</span>. This is the tech's Stack, I have knowledge and am confident about. I also have used <span>Bootstrap</span>, which is a CSS framework for developing responsive and mobile-first websites, for Responsive Web Projects.
                    </div>
                    <div className="skills">
                        {web_development.map((item) => (
                            <SkillStats
                                tools={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="right-content"
                    ref={image_1} >
                    <motion.img
                        src={web_development_svg}
                        alt="vector svg"
                        variants={imageFramer}
                        animate={image_control_1}
                    />
                </div>
            </ContainerStyled>

            <ContainerStyled>
                <div className="left-content">
                    <div className='heading'>
                        Programming
                    </div>
                    <div className="subheading">
                        For implementing of <span>Data Structures and Algorithms</span>, I use C++ Programming Language. I use Javascript Language for the development of <span>Web projects</span>. I also have coding experience in Java & Python.
                    </div>
                    <div className="skills">
                        {programming.map((item) => (
                            <SkillStats
                                tools={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="right-content"
                    ref={image_2} >
                    <motion.img
                        src={knowledge_svg}
                        alt="vector svg"
                        variants={imageFramer}
                        animate={image_control_2}
                    />
                </div>
            </ContainerStyled>

            <ContainerStyled>
                <div className="left-content">
                    <div className='heading'>
                        Tools / Libraries
                    </div>
                    <div className="subheading">
                        These are the Tool Stack which help me, to make my working as a <span>Developer</span> easier. I have experience on working with <span>React</span> Projects, <span>Git/Github</span> for Code Implementation & Progress tracking, <span>Figma</span> for Vector UI/UX content development and using it for Frontend Implementation & Projects Ideation.
                    </div>
                    <div className="skills">
                        {tools.map((item) => (
                            <SkillStats
                                tools={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="right-content"
                    ref={image_3} >
                    <motion.img
                        src={thinking_svg}
                        alt="vector svg"
                        variants={imageFramer}
                        animate={image_control_3} />
                </div>
            </ContainerStyled>
            <ContainerStyled>
                <div className="left-content">
                    <div className='heading'>
                        Web Services / Databases
                    </div>
                    <div className="subheading">
                        Some <span>Databases & Web services</span> I have worked upon.
                    </div>
                    <div className="skills">
                        {web_services.map((item) => (
                            <SkillStats
                                tools={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="right-content"
                    ref={image_4} >
                    <motion.img
                        src={server_svg}
                        alt="vector svg"
                        variants={imageFramer}
                        animate={image_control_4}
                    />
                </div>
            </ContainerStyled>
        </SkillsStyled>
    )
}

const ContainerStyled = styled(motion.section)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 2rem 0;

    &:nth-child(2n){
        flex-direction: reverse;
    }
    .left-content{
        padding: 0 .75rem;
        width: 50%;
        .heading{
            text-decoration: underline;
            font-size: 1.2rem;
            font-weight: 700;
            margin: .75rem 0;
            @media screen and (max-width:800px){
                font-weight: 1.2rem;
            }
        }

        .subheading{
            margin: .75rem 0;
        }

        .skills{
            margin: 1rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

    .right-content{
        margin: 0 .75rem;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 50%;
            height: 100%;
            object-fit: cover;
            padding: 1rem;
            @media screen and (max-width:800px){
                margin: 2rem 0;
            }
        }
    }

    @media screen and (max-width:800px){
        margin: 1.5rem 0;        
        flex-direction: column;
        .left-content{
            width: 100%;
            span{
            }
            .subheading, .skills{
            }
        }

        .right-content{
            img{
                width: 20rem;
                object-fit: cover;
                @media screen and (max-width:600px){
                    width: 15rem;
                }
            }
        }
  }
`

const SkillsStyled = styled(motion.section)`
    padding: 1rem;
    margin-bottom: 4rem;
`;

export default SkillsPage;