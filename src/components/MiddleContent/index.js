import React from 'react';
import { Container, PrimaryNewsCardsContainer } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';
import TextNewsCard from '../NewsCards/TextNewsCard';

const MiddleContent = ({ middleImageArticles, middleTextArticles }) => {
    const renderedMiddleImageArticles = middleImageArticles.map((article) => {
        return <PrimaryNewsCard key={article.id} article={article} />;
    });

    return (
        <Container>
            <PrimaryNewsCardsContainer>
                {renderedMiddleImageArticles}
            </PrimaryNewsCardsContainer>
            <TextNewsCard textArticles={middleTextArticles} />
        </Container>
    );
};

export default MiddleContent;
