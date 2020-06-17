import React from 'react';
import { Container } from './styles';
import TopContent from '../TopContent';
import MiddleContent from '../MiddleContent';
import BottomContent from '../BottomContent';

const MainContainer = () => {
    return (
        <Container>
            <TopContent />
            <MiddleContent />
            <BottomContent />
        </Container>
    );
};

export default MainContainer;
