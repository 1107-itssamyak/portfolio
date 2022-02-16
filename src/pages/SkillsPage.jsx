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
                        I have worked on various web development projects. This the basic tech's using which I have worked upon on projects. My Language preference for development is using Javascript.
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
                        I use C++ for implementing Data Structures and Algorithms. Javascript is mostly used by me when I want to develop web projects. I also have knowledge of Java and Python.
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
                        Tools
                    </div>
                    <div className="subheading">
                        These are the Tools which helps me, to make my working easier. I have also worked on React Projects, used Git for Code Implementation & Progress tracking, Figma for Vector UI/UX content and using it for development of Projects.
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
                        Some Databases and Web services I have worked upon.
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
            text-decoration: underline;
            font-style: italic;
            letter-spacing: 1px;
            font-size: 1.5rem;
            margin: 1.5rem 0 1rem 0;
            font-weight: 700;
            padding: .5rem 0;
        }
        .subheading{
            letter-spacing: 0;
            font-size: 1.1rem;
            margin: 1rem 0;
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
    padding: 1.5rem 1rem;
`;

export default SkillsPage;