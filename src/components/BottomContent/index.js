import React from 'react';
import { Container } from './styles';
import SecondaryNewsCard from '../NewsCards/SecondaryNewsCard';

const BottomContent = ({ bottomArticles }) => {
    const renderedBottomNewsCards = bottomArticles.map((article) => {
        return <SecondaryNewsCard key={article.title} article={article} />;
    });

    return <Container>{renderedBottomNewsCards}</Container>;
};

export default BottomContent;
