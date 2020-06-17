import React from 'react';
import { Container } from './styles';
import TopContent from '../TopContent';
import MiddleContent from '../MiddleContent';

const MainContainer = () => {
    return (
        <Container>
            <TopContent />
            <MiddleContent />
        </Container>
    );
};

export default MainContainer;
