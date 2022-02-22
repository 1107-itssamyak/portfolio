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
        <TimelineStyled id="timeline">
            <Title title={pageName} span={pageName} />
            <InnerLayout
                animate={controls}
                ref={ref}
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
    .small-title{
    }
    
    }
    
    .resume-content{
        border-left: 2px solid var(--border-color);
        @media screen and (max-width:600px){
        }
    }
    
    @media screen and (max-width: 800px){
    }
`;

export default TimelinePage;