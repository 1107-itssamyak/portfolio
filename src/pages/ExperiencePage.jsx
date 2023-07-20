import React from 'react'
import { data } from '../data/DataExperience';

// importing styled component
import styled from 'styled-components'
import Title from '../components/Title';

import { InnerLayout } from '../styles/Layout';
import ExperienceItem from '../components/ExperienceItem';

import { useScroll } from '../animation/useScroll';
import { scaledFramer } from '../animation/animation';

// importing svg's
import experience_svg from '../image/experience.svg';

const ExperiencePage = () => {
    const pageName = "Experience";

    const [ref, controls] = useScroll(0.25);

    return (
        <ExperienceStyled id="experience" ref={ref}>
            <Title title={pageName} />
            <InnerLayout
                className='section'
                animate={controls}
                variants={scaledFramer} >
                <div className="content">
                    <div className="resume-content" >
                        {data.map((item) => (
                            <ExperienceItem
                                key={item.id}
                                duration={item.duration}
                                title={item.title}
                                firmName={item.firmName}
                                location={item.location}
                                text={item.text}
                                skills={item.skills}
                            />
                        ))}
                    </div>
                    <div className="right-content">
                        <img
                            src={experience_svg}
                            alt="vector svg" />
                    </div>
                </div>
            </InnerLayout>
        </ExperienceStyled>
    )
}

const ExperienceStyled = styled.section`
    min-height: 100vh;
    padding: 1rem;
    padding-top: 2rem;
    @media screen and (max-width:1200px){
        min-height: 80vh;
    }
    .small-title{
        margin-bottom: 2rem;
        font-weight: 600;
    }

    .section{
        padding: 0;
        margin: 1rem;
    }
    
    .content{
        margin: 5rem 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        
        .resume-content{
            flex: 0.6;
            border-left: 2px solid var(--border-color);
        }
        
        .right-content{
            padding: 1rem;
            flex: 0.4;
            display: flex;
            align-items: center;
            justify-content: center;
            
            img{
                width: 60%;
                object-fit: cover;
                padding: 1rem;
                @media screen and (max-width:800px){
                    padding: 2rem 1rem;
                    width: 40%;
                }
            }
        }
        
        @media screen and (max-width:800px){
            flex-direction: column;
            margin: 1rem 0;
        }
    }
`;

export default ExperiencePage;