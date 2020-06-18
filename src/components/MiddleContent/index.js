import React from 'react';
import { Container, PrimaryNewsCardsContainer } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';
import TextNewsCard from '../NewsCards/TextNewsCard';

const MiddleContent = () => {
    return (
        <Container>
            <PrimaryNewsCardsContainer>
                <PrimaryNewsCard />
                <PrimaryNewsCard />
                <PrimaryNewsCard />
                <PrimaryNewsCard />
            </PrimaryNewsCardsContainer>
            <TextNewsCard />
        </Container>
    );
};

export default MiddleContent;
