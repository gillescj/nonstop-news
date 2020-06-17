import React from 'react';
import { Container, OuterBanner, MiddleBanner, HeaderContent } from './styles';
import Navigation from '../Navigation';

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
        </Container>
    );
};

export default MainHeader;
