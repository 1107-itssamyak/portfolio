import React from 'react'

// importing styled component
import styled from 'styled-components'

import ImageSection from '../components/ImageSection'
import Title from '../components/Title'

const About = () => {
    const pageName = "about me";
    return (
        <AboutStyled id="about">
            <Title title={pageName} span={pageName} />
            <ImageSection />
        </AboutStyled >
    )
}

const AboutStyled = styled.div`
    margin-bottom: 5rem;
    padding: 1rem 1.5rem;
`

export default About;