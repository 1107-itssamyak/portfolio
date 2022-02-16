import React from 'react'
import SkillStats from '../components/SkillStats';

// import styled component
import styled from 'styled-components'
import Title from '../components/Title';

// importing svg's
import web_development_svg from '../image/web_developer.svg';
import react_svg from "../image/react.svg";
import server_svg from "../image/server_status.svg";
import knowledge_svg from "../image/knowledge.svg";

// importing data
import { web_development, web_services, tools, programming } from '../data/DataSkillSection';

const SkillsPage = () => {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'my skills'} />

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
                    <img src={web_development_svg} alt="vector svg" />
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
                    <img src={knowledge_svg} alt="vector svg" />
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
                    <img src={react_svg} alt="vector svg" />
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
                    <img src={server_svg} alt="vector svg" />
                </div>
            </ContainerStyled>
        </SkillsStyled>
    )
}

const ContainerStyled = styled.div`
    padding: 1.5rem 0;
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
            }
        }
  }
`

const SkillsStyled = styled.section`
    padding: 1rem 1.5rem;
`;

export default SkillsPage;