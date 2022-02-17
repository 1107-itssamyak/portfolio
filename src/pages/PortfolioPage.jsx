import React from 'react'
import Title from '../components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

import Menu from '../components/Menu';
import { data } from '../data/DataPortfolio';
import { useScroll } from '../animation/useScroll';
import { fade } from '../animation/animation';

const PortfolioPage = () => {
    const [ref, controls] = useScroll(0.2);

    const pageName = "portfolio";
    return (
        <MainLayout id="portfolio">
            <Title title={pageName} span={pageName} />
            <InnerLayout
                ref={ref}
                animate={controls}
                variants={fade} >
                <Menu data={data} />
            </InnerLayout>
        </MainLayout >
    )
}

export default PortfolioPage;