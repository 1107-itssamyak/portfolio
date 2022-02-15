import React from 'react'
import ImageSection from './ImageSection';
import Title from './Title';

// importing styled component
import styled from 'styled-components'

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