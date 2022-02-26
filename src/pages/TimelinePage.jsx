import React from 'react'
import { EducationQualificationItems } from '../data/DataResumePage';

// importing styled component
import styled from 'styled-components'
import Title from '../components/Title';

import { InnerLayout } from '../styles/Layout';
import SchoolIcon from '@material-ui/icons/School';
import SmallTitle from '../components/SmallTitle';
import ResumeItem from '../components/ResumeItem';

import { useScroll } from '../animation/useScroll';
import { scaledFramer } from '../animation/animation';

// importing svg's
import education_svg from '../image/education.svg';

const TimelinePage = () => {
    const pageName = "timeline";
    const school = <SchoolIcon />

    const [ref, controls] = useScroll(0.25);

    return (
        <TimelineStyled id="timeline" ref={ref}>
            <Title title={pageName} />
            <InnerLayout
                className='section'
                animate={controls}
                variants={scaledFramer} >
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="content">
                    <div className="resume-content" >
                        {EducationQualificationItems.map((item) => (
                            <ResumeItem
                                key={item.id}
                                year={item.year}
                                title={item.title}
                                subTitle={item.subtitle}
                                text={item.text}
                            />
                        ))}
                    </div>
                    <div className="right-content">
                        <img
                            src={education_svg}
                            alt="vector svg" />
                    </div>
                </div>
            </InnerLayout>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.section`
    min-height: 100vh;
    padding: 1rem;
    padding-top: 2rem;
    @media screen and (max-width:800px){
        min-height: 70vh;
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
        }
    }
`;

export default TimelinePage;