import React from 'react';
import { Container, HeaderContent } from './styles';
import Navigation from '../Navigation';

const MainHeader = () => {
    return (
        <Container>
            <HeaderContent>
                <Navigation />
            </HeaderContent>
        </Container>
    );
};

export default MainHeader;
