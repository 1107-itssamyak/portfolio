import React from 'react'

// importing styled component
import styled from 'styled-components'

import ImageSection from '../components/ImageSection'
import Title from '../components/Title'

const About = () => {
    const pageName = "about me";

    return (
        <AboutStyled id="about">
            <Title
                title={pageName} />
            <ImageSection />
        </AboutStyled >
    )
}

const AboutStyled = styled.div`
    min-height: 80vh;
    padding: 1rem;
`

export default About;