import React from 'react'
import { EducationQualificationItems } from '../data/DataResumePage';

// importing styled component
import styled from 'styled-components'
import Title from '../components/Title';

import { InnerLayout } from '../styles/Layout';
import SchoolIcon from '@material-ui/icons/School';
import SmallTitle from '../components/SmallTitle';
import ResumeItem from '../components/ResumeItem';

const TimelinePage = () => {
    const pageName = "timeline";
    const school = <SchoolIcon />

    return (
        <TimelineStyled id="timeline">
            <Title title={pageName} span={pageName} />
            <InnerLayout>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
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
    min-height: 100vh;
    padding: 1rem 1.5rem;
    .small-title{
        padding-bottom: 2rem;
    }
    
    .u-small-title-margin{
        margin-top: 2rem;
    }
    
    .resume-content{
        margin: 0 2rem;
        border-left: 2px solid var(--border-color);
    }
    
    @media screen and (max-width: 800px){
        margin-bottom: 2rem;
    }
`;

export default TimelinePage;