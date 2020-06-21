import React from 'react';
import { Container, PrimaryNewsCardsContainer } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';
import TextNewsCard from '../NewsCards/TextNewsCard';

const MiddleContent = ({ middleArticles }) => {
    return (
        <Container>
            <PrimaryNewsCardsContainer>
                <PrimaryNewsCard article={middleArticles[0]} />
                <PrimaryNewsCard article={middleArticles[1]} />
                <PrimaryNewsCard article={middleArticles[2]} />
                <PrimaryNewsCard article={middleArticles[3]} />
            </PrimaryNewsCardsContainer>
            <TextNewsCard textArticles={middleArticles.slice(4)} />
        </Container>
    );
};

export default MiddleContent;
