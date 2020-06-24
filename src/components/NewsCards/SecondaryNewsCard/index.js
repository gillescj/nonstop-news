import React from 'react';
import {
    Container,
    ImageWrapper,
    TextContent,
    ArticleMainText,
    ArticleInfo,
} from './styles';
import moment from 'moment';

const SecondaryNewsCard = ({ article }) => {
    const limitTextSize = (text, limit) => {
        if (!text) return;
        if (text.length > limit) return;
        return text;
    };

    return (
        <>
            {!article ? null : (
                <Container href={article.url} rel="noopener noreferrer" target="_blank">
                    <ImageWrapper>
                        <img src={article.urlToImage} alt={article.title} />
                    </ImageWrapper>
                    <TextContent>
                        <ArticleMainText>
                            <h3>{article.title}</h3>
                        </ArticleMainText>
                        <ArticleInfo>
                            <div>{limitTextSize(article.author, 20)}</div>
                            <div>{limitTextSize(article.source.name, 20)}</div>
                            <div>{moment.utc(article.publishedAt).fromNow()}</div>
                        </ArticleInfo>
                    </TextContent>
                </Container>
            )}
        </>
    );
};

export default SecondaryNewsCard;
