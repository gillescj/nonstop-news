import React from 'react';
import { Container, OuterBanner, MiddleBanner, HeaderContent } from './styles';
import Navigation from '../Navigation';
import NewsLabelBanner from './NewsLabelBanner';

const MainHeader = () => {
    return (
        <Container>
            <OuterBanner />
            <MiddleBanner>
                <HeaderContent>
                    <Navigation />
                </HeaderContent>
            </MiddleBanner>
            <OuterBanner />
            <NewsLabelBanner category="Business" country="Canada" />
        </Container>
    );
};

export default MainHeader;
