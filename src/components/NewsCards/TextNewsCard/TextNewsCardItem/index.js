import React from 'react';
import { Container, TextContent, ArticleTitle, ArticleInfo } from './styles';
import moment from 'moment';

const TextNewsCardItem = ({ article }) => {
    return (
        <>
            {!article ? null : (
                <Container href={article.url} rel="noopener noreferrer" target="_blank">
                    <TextContent>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleInfo>
                            {moment(
                                article.publishedAt,
                                'YYYY-MM-DD HH:mm:ssZZ'
                            ).fromNow()}
                        </ArticleInfo>
                    </TextContent>
                </Container>
            )}
        </>
    );
};

export default TextNewsCardItem;
