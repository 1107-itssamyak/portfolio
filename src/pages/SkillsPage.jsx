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
    const [image_1, image_control_1] = useScroll(0.1);
    const [image_2, image_control_2] = useScroll(0.1);
    const [image_3, image_control_3] = useScroll(0.1);
    const [image_4, image_control_4] = useScroll(0.1);

    return (
        <SkillsStyled id="skills">
            <Title title={pageName} span={pageName} />

            <ContainerStyled>
                <div className="left-content">
                    <div className='heading'>
                        Web Development
                    </div>
                    <div className="subheading">
                        I have worked on various Web Development projects. This is the tech's using which I have worked upon on projects.
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
                <div className="right-content">
                    <motion.img
                        src={web_development_svg}
                        alt="vector svg"
                        ref={image_1}
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
                        I use C++ for implementing <span>Data Structures and Algorithms</span>. Javascript is mostly used by me when I want to develop <span>Web projects</span>. I also have knowledge of Java and Python.
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
                <div className="right-content">
                    <motion.img
                        src={knowledge_svg}
                        alt="vector svg"
                        ref={image_2}
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
                        These are the Tools which helps me, to make my working easier. I have experience in working on <span>React</span> Projects, use <span>Git</span> for Code Implementation & Progress tracking, <span>Figma</span> for Vector UI/UX content and using it for development of Projects.
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
                <div className="right-content">
                    <motion.img
                        src={thinking_svg}
                        alt="vector svg"
                        ref={image_3}
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
                <div className="right-content">
                    <motion.img
                        src={server_svg}
                        alt="vector svg"
                        ref={image_4}
                        variants={imageFramer}
                        animate={image_control_4}
                    />
                </div>
            </ContainerStyled>
        </SkillsStyled>
    )
}

const ContainerStyled = styled(motion.div)`
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;

    &:nth-child(2n){
        flex-direction: row-reverse;
    }

    .left-content{
        width: 50%;
        .heading{
            text-align: center;
            text-decoration: underline;
            font-style: italic;
            letter-spacing: 1px;
            font-size: 1.4rem;
            margin: 1.5rem 0 1rem 0;
            font-weight: 700;
            padding: .5rem 0;
            @media screen and (max-width:600px){
                margin: 1rem 0;
                font-size: 1.2rem;
            }
        }
        .subheading{
            letter-spacing: 0;
            font-size: 1rem;
            margin: 1rem .5rem;
            font-weight: 400;
        }
        .skills{
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

    .right-content{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 60%;
            object-fit: cover;
        }
    }

    @media screen and (max-width:800px){
        margin: .75rem;
        margin-bottom: 1rem;
        &:nth-child(2n){
            flex-direction: column;
        }
        
        flex-direction: column;
        .left-content{
            width: 100%;
            span{
                font-size: 1rem;
            }
            .subheading, .skills{
                font-size: 1rem;
            }
        }

        .right-content{
            img{
                margin: 2rem 0 0 0;
                width: 20rem;
                object-fit: cover;
                @media screen and (max-width:600px){
                    margin: 1.25rem 0;
                    width: 15rem;
                }
            }
        }
  }
`

const SkillsStyled = styled(motion.section)`
    margin-top: 1rem;
    padding: 0 1.5rem;
    margin-bottom: 5rem;
`;

export default SkillsPage;