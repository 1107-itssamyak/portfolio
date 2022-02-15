import React from 'react'
import Title from '../components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

import Menu from '../components/Menu';
import { data } from '../data/DataPortfolio';

const PortfolioPage = () => {
    const pageName = "portfolio";
    return (
        <MainLayout>
            <Title title={pageName} span={pageName} />
            <InnerLayout >
                <Menu data={data} />
            </InnerLayout>
        </MainLayout >
    )
}

export default PortfolioPage;