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

const TimelinePage = () => {
    const pageName = "timeline";
    const school = <SchoolIcon />

    const [ref, controls] = useScroll(0.3);

    return (
        <TimelineStyled id="timeline" ref={ref}>
            <Title title={pageName} />
            <InnerLayout
                animate={controls}
                variants={scaledFramer} >
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
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
            </InnerLayout>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.section`
    min-height: 70vh;
    padding: 1rem;
    .small-title{
        margin-bottom: 2rem;
        font-weight: 600;
    }
    
    .resume-content{
        margin: 1rem;
        border-left: 2px solid var(--border-color);
    }
`;

export default TimelinePage;