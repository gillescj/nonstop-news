import React from 'react';
import {
    Container,
    ImageWrapper,
    TextContent,
    ArticleMainText,
    ArticleInfo,
} from './styles';
import faker from 'faker';

const SecondaryNewsCard = ({
    article = {
        source: {
            name: 'FXStreet',
        },
        author: 'Yohay Elam',
        title: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
        publishedAt: '2020-06-16T06:07:43Z',
        url:
            'https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607',
        urlToImage: faker.image.image(),
    },
}) => {
    return (
        <Container href={article.url} rel="noopener noreferrer" target="_blank">
            <ImageWrapper>
                <img src={article.urlToImage} alt={article.title} />
            </ImageWrapper>
            <TextContent>
                <ArticleMainText>
                    <h3>{article.title}</h3>
                </ArticleMainText>
                <ArticleInfo>
                    <div>{article.author}</div>
                    <div>{article.source.name}</div>
                    <div>{article.publishedAt}</div>
                </ArticleInfo>
            </TextContent>
        </Container>
    );
};

export default SecondaryNewsCard;
