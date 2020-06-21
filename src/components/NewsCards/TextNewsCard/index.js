import React from 'react';
import { Container } from './styles';
import TextNewsCardItem from './TextNewsCardItem';
import { uniqueId } from 'lodash';

const TextNewsCard = ({ textArticles }) => {
    const renderedNewsCardItems = textArticles.map((article) => {
        return <TextNewsCardItem key={uniqueId()} article={article} />;
    });

    return <Container>{renderedNewsCardItems}</Container>;
};

export default TextNewsCard;
