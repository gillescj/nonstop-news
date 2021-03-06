import React from 'react';
import {
    Container,
    ImageWrapper,
    TextContent,
    ArticleMainText,
    ArticleInfo,
} from './styles';
import moment from 'moment';
import imagePlaceholderSVG from 'assets/images/svgs/imagePlaceholder.svg';

const SecondaryNewsCard = ({ article }) => {
    const limitTextSize = (text, limit) => {
        if (!text) return;
        if (text.length > limit) return;
        return text;
    };

    const onImageError = (event) => {
        event.target.src = imagePlaceholderSVG;
    };

    return (
        <>
            {!article ? null : (
                <Container href={article.url} rel="noopener noreferrer" target="_blank">
                    <ImageWrapper>
                        {!article.urlToImage ? (
                            <img src={imagePlaceholderSVG} alt={article.title} />
                        ) : (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                // onError={`this.onerror=null;this.src='${imagePlaceholderSVG}';`}
                                onError={(event) => onImageError(event)}
                            />
                        )}
                    </ImageWrapper>
                    <TextContent>
                        <ArticleMainText>
                            <h3>{article.title}</h3>
                        </ArticleMainText>
                        <ArticleInfo>
                            <div>{limitTextSize(article.author, 20)}</div>
                            <div>{limitTextSize(article.source.name, 20)}</div>
                            <div>
                                {moment(
                                    article.publishedAt,
                                    'YYYY-MM-DD HH:mm:ssZZ'
                                ).fromNow()}
                            </div>
                        </ArticleInfo>
                    </TextContent>
                </Container>
            )}
        </>
    );
};

export default SecondaryNewsCard;
