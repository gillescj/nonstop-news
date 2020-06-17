import React from 'react';
import { Container } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';

const MiddleContent = () => {
    return (
        <Container>
            <PrimaryNewsCard />
            <PrimaryNewsCard />
            <PrimaryNewsCard />
            <PrimaryNewsCard />
        </Container>
    );
};

export default MiddleContent;
