import React from 'react'
import Title from '../components/Title'
import { InnerLayout } from '../styles/Layout'

import Menu from '../components/Menu';
import { data } from '../data/DataPortfolio';
import { motion } from 'framer-motion';

// import styled from styled component
import styled from 'styled-components';

import { useScroll } from '../animation/useScroll';
import { fade } from '../animation/animation';

const PortfolioPage = () => {
    const [ref, controls] = useScroll(0.2);

    const pageName = "portfolio";
    return (
        <PortfolioStyled id="portfolio" ref={ref}>
            <Title title={pageName} />
            <InnerLayout
                variants={fade}
                animate={controls}
            >
                <Menu data={data} />
            </InnerLayout>
        </PortfolioStyled >
    )
}

const PortfolioStyled = styled(motion.section)`
    padding: 1rem;
    min-height: 150vh;
`

export default PortfolioPage;