import React from 'react'

// importing styled component
import styled from 'styled-components'

import ImageSection from '../components/ImageSection'
import Title from '../components/Title'

const About = () => {
    return (
        <AboutStyled>
            <Title title={'About me'} span={'About me'} />
            <ImageSection />
        </AboutStyled >
    )
}

const AboutStyled = styled.div`
    padding: 1rem 0;
`

export default About;