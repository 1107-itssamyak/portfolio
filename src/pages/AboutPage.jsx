import React from 'react'

// importing styled component
import styled from 'styled-components'

import ImageSection from '../components/ImageSection'
import Title from '../components/Title'

const About = () => {
    const pageName = "about me";

    return (
        <AboutStyled id="about" >
            <Title
                title={pageName} />
            <ImageSection />
        </AboutStyled >
    )
}

const AboutStyled = styled.div`
    min-height: 100vh;
    padding: 1rem;
    padding-top: 2rem;
    @media screen and (max-width:800px){
        min-height: 60vh;
    }
`

export default About;