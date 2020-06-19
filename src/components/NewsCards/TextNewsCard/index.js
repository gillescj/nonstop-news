import React from 'react';
import { Container } from './styles';
import TextNewsCardItem from './TextNewsCardItem';
import { uniqueId } from 'lodash';

const dummyNewsItem = {
    sourceName: 'FXStreet',
    author: 'Yohay Elam',
    title: 'dummy title',
    publishedAt: '2020-06-16T06:07:43Z',
};

const TextNewsCard = ({
    newsItems = [
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
        dummyNewsItem,
    ],
}) => {
    const renderedNewsCardItems = newsItems.map((newsItem) => {
        return <TextNewsCardItem key={uniqueId()} newsItem={newsItem} />;
    });

    return <Container>{renderedNewsCardItems}</Container>;
};

export default TextNewsCard;
