import React from 'react';
import { Container, TextContent, ArticleTitle, ArticleInfo } from './styles';
import faker from 'faker';
import moment from 'moment';

const TextNewsCardItem = ({
    article = {
        title: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
        url:
            'https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607',
    },
}) => {
    return (
        <Container href={article.url} rel="noopener noreferrer" target="_blank">
            <TextContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleInfo>{moment.utc(article.publishedAt).fromNow()}</ArticleInfo>
            </TextContent>
        </Container>
    );
};

export default TextNewsCardItem;
