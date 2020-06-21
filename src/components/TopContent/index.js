import React from 'react';
import { Container, SecondaryNewsCardContainer } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';
import SecondaryNewsCard from '../NewsCards/SecondaryNewsCard';

const TopContent = ({ topArticles }) => {
    return (
        <Container>
            <PrimaryNewsCard article={topArticles[0]} />
            <PrimaryNewsCard article={topArticles[1]} />
            <SecondaryNewsCardContainer>
                <SecondaryNewsCard article={topArticles[2]} />
                <SecondaryNewsCard article={topArticles[3]} />
            </SecondaryNewsCardContainer>
        </Container>
    );
};

export default TopContent;
